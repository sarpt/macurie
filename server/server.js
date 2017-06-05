const express = require('express');
const morganLogger = require('morgan');
const bodyParser = require('body-parser');

const app = express();

app.use(morganLogger('dev'));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

app.get('*', (request, response) => {
  response.status(200).send({message: 'Sup fool'});
});

module.exports = app;
