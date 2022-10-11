'use strict';

const express = require('express');

const PORT = process.env.PORT || 3002;

const app = express();

app.get('/', (req, res, next) => {
    res.status(200).send('Hello World');
  });

app.get('/hello'), (req, res, next) => {
    let { name } = req.query;
    res.status(200).send(`Greetings ${name}!`)
};

function start(){
  app.listen(PORT, () => console.log(`listening on port: ${PORT}`));
};

start(); 