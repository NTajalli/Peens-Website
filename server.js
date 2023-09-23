const express = require('express');
const app = express();
const ejs = require('ejs');
const path = require('path');
const PORT = 3000;

// Serve static files from node_modules and public directory
app.use('/static', express.static(path.join(__dirname, 'node_modules')));
app.use('/public', express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
    res.render('layout', {
        body: ejs.renderFile('views/home.ejs')
    });
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
app.set('view engine', 'ejs');


app.use('/static', express.static(path.join(__dirname, 'node_modules')))

