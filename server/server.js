const express = require('express');
const morganLogger = require('morgan');
const bodyParser = require('body-parser');
const auth = require('./auth');
const routes = require('./routes/index');

const app = express();

app.use(morganLogger('dev'));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(auth.initialize());
app.use(express.static('public'));

routes(app);

module.exports = app;
