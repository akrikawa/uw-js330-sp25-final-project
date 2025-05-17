require('dotenv').config();

const express = require('express');
const routes = require('./routes');

const server = express();
server.use(express.json());
server.use(routes);

// This is here as an early test to make sure everything
// is running and to provide something to check that
// teseting is set up for the project server.test.js.
server.get('/hello', (req, res) => {
  const text = { text: 'Hello World!' };
  res.send(text);
});

module.exports = server;
