const consola = require('consola');
const express = require('express');
const axios = require('axios');

const app = express();

// GET - /api/title
app.get('/', (req, res) => {
  const recommendationsURL = `https://tastedive.com/api/similar?q=and+then+there+were+none&type=books&info=1&k=${process.env.TASTE_DIVE_API_KEY}`;

  axios
    .get(recommendationsURL)
    .then(({ data }) => {
      res.json(data);
    })
    .catch((error) => {
      res.status(400).json(error);
      consola.error({
        message: `error from axios server ${error} `,
        badge: true,
      });
    });
});

module.exports = app;
