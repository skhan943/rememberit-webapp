const express = require('express');
const bodyParser = require('body-parser');
const upload = require('multer')();
const connectDB = require('./config/db');
const memories = require('./routes/api/memories');

const app = express();

// Connect Database
connectDB();

// For parsing application/JSON
app.use(bodyParser.json());

// For parsing application/xwww-
app.use(bodyParser.urlencoded({extended: true}));
// form-urlencoded

// For parsing multipart/form-data
app.use(upload.array());

// To allow for local running
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "GET,HEAD,OPTIONS,POST,PUT,DELETE");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization");
    next();
});

app.use('/api/memories', memories);

// Define port and start server
const port = process.env.port || 8082;
app.listen(port, () => console.log(`Server running on port ${port}`));