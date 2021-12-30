const express = require('express');

const app = express();
const phone = require('./routes/phone');

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(function (req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3001');
    next();
});
app.use('/phones', phone);

module.exports = app;