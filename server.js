const express = require('express');
const ejs = require('ejs');
const path = require('path');
const bodyParser = require('body-parser');
const multer = require('multer');
const session = require('express-session');
const MongoStore = require('connect-mongo');
const nodemailer = require('nodemailer');
const sgMail = require('@sendgrid/mail');
const MemoryStore = require('session-memory-store')(session);
const AWS = require('aws-sdk');
AWS.config.update({
    accessKeyId: process.env.ACCESS_KEY_ID,
    secretAccessKey: process.env.SECRET_ACCESS_KEY,
    region: process.env.S3_REGION
 });
 
const s3 = new AWS.S3();
const app = express();
const PORT = 3000;

function generateHTML(formData) {
    // Start with basic structure
    let html = `
        <html>
            <body>
                <h2>Form Submission</h2>
    `;

    // Add form text data
    for (let key in formData) {
        if (key !== "referenceFiles") {
            html += `<p><strong>${key}:</strong> ${formData[key]}</p>`;
        }
    }

    // Add images (You can adjust this if the structure of formData changes)
    formData.referenceFiles.forEach(file => {
        html += `<img src="${file.s3Url}"/>`; // Use the S3 URL of the uploaded image
    });

    // Close tags
    html += `
            </body>
        </html>
    `;

    return html;
}


async function uploadToS3(content, fileName, contentType) {
    const params = {
        Bucket: 'mpdecalsformstorage', 
        Key: fileName,
        Body: content,
        ContentType: contentType,
        ACL: 'public-read'
    };

    await s3.putObject(params).promise();
    return `https://${params.Bucket}.s3.amazonaws.com/${params.Key}`;
}


app.set('view engine', 'ejs');

// Middleware for serving static files
app.use('/static', express.static(path.join(__dirname, 'node_modules')));
app.use('/public', express.static(path.join(__dirname, 'public')));
app.use(express.static(path.join(__dirname, 'public')));

// Middleware for parsing incoming payloads
app.use(bodyParser.urlencoded({ extended: true, limit: '50mb' }));
app.use(bodyParser.json({ limit: '50mb' }));

app.use(express.json());

// Multer setup for file uploads
const storage = multer.diskStorage({
    destination: function(req, file, cb) {
        cb(null, 'uploads/');
    },
    filename: function(req, file, cb) {
        cb(null, file.originalname);
    }
});
const upload = multer({ storage: storage });

// Session setup

app.use(session({
    secret: 'your_secret_key',
    resave: false,
    saveUninitialized: false,
    store: new MemoryStore(),
    cookie: {
        maxAge: 3600000 // 1 hour
    }
}));

// Routes
app.get('/', (req, res) => {
    res.render('layout', { body: 'home' });
});

app.get('/form', (req, res) => {
    res.render('layout', { body: 'form' });
});

const images = [
    { path: 'images/gallery1.jpg', title: 'Image 1', description: 'Some description about the image.' },
    { path: 'images/gallery2.jpg', title: 'Image 2', description: 'Another description.' },
    { path: 'images/gallery3.jpg', title: 'Image 3', description: 'Some description about the image.' },
    { path: 'images/gallery4.jpg', title: 'Image 4', description: 'Another description.' },
    { path: 'images/gallery5.jpg', title: 'Image 5', description: 'Some description about the image.' },
    { path: 'images/gallery6.jpg', title: 'Image 6', description: 'Another description.' },
    { path: 'images/gallery7.jpg', title: 'Image 7', description: 'Some description about the image.' },
    { path: 'images/gallery8.jpg', title: 'Image 8', description: 'Another description.' },
    { path: 'images/gallery9.jpg', title: 'Image 9', description: 'Some description about the image.' },
    { path: 'images/gallery10.jpg', title: 'Image 10', description: 'Another description.' },
    { path: 'images/gallery11.jpg', title: 'Image 11', description: 'Some description about the image.' }
];

app.get('/gallery', (req, res) => {
    res.render('layout', { body: 'gallery', images: images });
});

app.get('/contact', (req, res) => {
    res.render('layout', { body: 'contact', query: req.query });
});

app.get('/get-form-data', (req, res) => {
    try {
        db.collection('tempFormData').findOne({ sessionId: req.sessionID }, (err, doc) => {
            if (err) {
                throw err;
            }
            res.json(doc ? doc.data : {});
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Failed to fetch form data" });
    }
});

  
app.post('/save-form-data', (req, res) => {
    try {
        const formData = {
            sessionId: req.sessionID,
            data: req.body,
            createdAt: new Date()
        };

        db.collection('tempFormData').insertOne(formData, (err, result) => {
            if (err) {
                throw err;
            }
            res.sendStatus(200);
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Failed to save form data" });
    }
});

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'build', 'index.html'));
  });  

// SendGrid Setup
sgMail.setApiKey(process.env.SENDGRID_API_KEY);

const transporter = nodemailer.createTransport({
    service: 'SendGrid',
    auth: {
        user: 'apikey', // 'apikey' is a magic word, don't change it
        pass: process.env.SENDGRID_API_KEY
    }
});

app.post('/contact', (req, res) => {
    const { name, email, message } = req.body;

    const mailOptions = {
        from: "noreplympdecalsus@gmail.com",
        to: 'noahtajalli@outlook.com',
        subject: `Message from ${name}`,
        text: message,
        html: `<p>${message}</p>`
    };

    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            console.log(error);
            res.redirect('/contact?success=false');
        } else {
            console.log('Email sent: ' + info.response);
            res.redirect('/contact?success=true');
        }
    });
});

app.post('/send-email', async (req, res) => {
    try {
        const formData = req.body;

        // 1. Upload each image in referenceFiles to S3
        for (const file of formData.referenceFiles) {
            const buffer = Buffer.from(file.dataURL.split(',')[1], 'base64'); // Convert data URL to buffer
            const fileKey = `images/${Date.now()}-${file.name}`;
            const s3Url = await uploadToS3(buffer, fileKey, file.type);
            file.s3Url = s3Url; // Add the S3 URL to the file object
        }

        // 2. Generate the HTML content with updated formData
        const htmlContent = generateHTML(formData);

        // 3. Upload the generated HTML content to S3
        const htmlKey = `form-submissions/${Date.now()}.html`;
        const htmlS3Url = await uploadToS3(htmlContent, htmlKey, 'text/html');

        // 4. Send an email with the S3 link to the HTML content
        const msg = {
            from: "noreplympdecalsus@gmail.com",
            to: 'noahtajalli@outlook.com',
            subject: 'New form submission',
            html: `Here's the link to the form submission: <a href="${htmlS3Url}">${htmlS3Url}</a>`,
            attachments: []  // You can still add attachments if needed
        };

        transporter.sendMail(msg, (error, info) => {
            if (error) {
                console.error("Error sending email:", error);
                res.status(500).send("Error sending email.");
            } else {
                console.log("Email sent:", info.response);
                res.status(200).send("Email sent successfully.");
            }
        });
    } catch (err) {
        console.error("Error in processing form submission:", err);
        res.status(500).send("Error processing form submission.");
    }
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
