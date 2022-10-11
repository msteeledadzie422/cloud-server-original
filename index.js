'use strict';

const express = require('express');
const notFound = require('./error-handlers/404');
const errorHandlers = require('./error-handlers/500');

const PORT = process.env.PORT || 3002;

const app = express();

app.get('/', (req, res, next) => {
    res.status(200).send('Hello World');
  });
  
app.get('/bad', (req, res, next) => {
    next('bad route');
  });

app.use('*', notFound);

app.use(errorHandlers);

function start(){
  app.listen(PORT, () => console.log(`listening on port: ${PORT}`));
}

start(); 