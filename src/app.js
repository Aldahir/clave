const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
var app = express();


app.set('view engine', 'pug');
app.use('/assets', express.static(path.join(__dirname, 'public')));

const userRoute = require('./routes/user');

app.use('/', userRoute);

module.exports = app;