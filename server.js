const express = require('express');
const app = express();
const ejs = require('ejs');
const path = require('path');
const PORT = 3000;
app.set('view engine', 'ejs');

// Serve static files from node_modules and public directory
app.use('/static', express.static(path.join(__dirname, 'node_modules')));
app.use('/public', express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
    res.render('layout', {
        body: 'home'
    });
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


app.use(express.static('public'));

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});

const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: false }));

const multer = require('multer');
const storage = multer.diskStorage({
    destination: function(req, file, cb) {
        cb(null, 'uploads/');
    },
    filename: function(req, file, cb) {
        cb(null, file.originalname);
    }
});

const upload = multer({ storage: storage });

app.use('/static', express.static(path.join(__dirname, 'node_modules')))

const nodemailer = require('nodemailer');
const sgMail = require('@sendgrid/mail');

sgMail.setApiKey(process.env.SENDGRID_API_KEY);

const transporter = nodemailer.createTransport({
    service: 'SendGrid',
    auth: {
        user: 'apikey', // 'apikey' is a magic word, don't change it
        pass: process.env.SENDGRID_API_KEY
    }
});

app.post('/contact', (req, res) => {
    // Get form values (make sure the form input names match these)
    const { name, email, message } = req.body;

    // Set up email data
    const mailOptions = {
        from: "noreplympdecalsus@gmail.com", // sender address from the form
        to: 'noahtajalli@outlook.com', // your email where you want to receive messages
        subject: `Message from ${name}`,
        text: message,
        html: `<p>${message}</p>` // you can use HTML here if you want
    };

    // Send email
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



