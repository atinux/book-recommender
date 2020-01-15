const express = require('express');
const cors = require('cors');
const consola = require('consola');
const axios = require('axios');
const { Nuxt, Builder } = require('nuxt');
const app = express();
const jsonParser = express.json();

const titleRouter = require('../api/title/index');

// Import and Set Nuxt.js options
const config = require('../nuxt.config.js');
config.dev = process.env.NODE_ENV !== 'production';

async function start() {
  // Init Nuxt.js
  const nuxt = new Nuxt(config);

  const { host, port } = nuxt.options.server;

  // Give app ability to parse json
  app.use(jsonParser);

  // Give app ability to get past CORS issues
  app.use(cors());

  // Give nuxt middleware to express
  app.use(nuxt.render);

  // Build only in dev mode
  if (config.dev) {
    const builder = new Builder(nuxt);
    await builder.build();
  } else {
    await nuxt.ready();
  }

  app.use('/title', titleRouter);

  app.get('/title', (req, res) => {
    consola.ready({
      message: `title from frontend: ${res.json()}`,
      badge: true,
    });

    const recommendationsURL = `https://tastedive.com/api/similar?q=and+then+there+were+none&type=books&info=1&k=${process.env.TASTE_DIVE_API_KEY}`;

    axios
      .get(recommendationsURL, (req, res) => {
        consola.ready({
          message: `from server/index.js: ${res.json()}`,
          badge: true,
        });
      })
      .catch((error) => {
        consola.error({
          message: `error from axios server ${error} `,
          badge: true,
        });
      });
  });

  // Listen to the server
  app.listen(port, host, () => {
    consola.ready({
      message: `Server listening on http://${host}:${port}`,
      badge: true,
    });
  });
}

start();
