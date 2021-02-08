const express = require('express');
const path = require('path');
const bodyPars = require('body-parser');

const app = express();

const login = require('./login');
const registr = require('./registr');

const urlPars = bodyPars.urlencoded({ extended: false });
app.use(urlPars);
app.use('/login', login);
app.use('/registration', registr);

app.get('/about', (req, res) => {
   res.sendFile(path.join(__dirname, '/pages/about.html'));

});

app.get('/new', (req, res) => {
   res.sendFile(path.join(__dirname, '/pages/new.html'));

});

app.get('/home', (req, res) => {
   res.sendFile(path.join(__dirname, '/pages/home.html'));

})

app.listen(3000);