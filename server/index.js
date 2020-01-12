const express = require('express');
const bodyparser = require('body-parser');
const cors = require('cors');
const consola = require('consola');
const axios = require('axios');
const { Nuxt, Builder } = require('nuxt');
const app = express();

const titleRouter = require('../api/title/index');

// Import and Set Nuxt.js options
const config = require('../nuxt.config.js');
config.dev = process.env.NODE_ENV !== 'production';

async function start() {
  // Init Nuxt.js
  const nuxt = new Nuxt(config);

  const { host, port } = nuxt.options.server;

  // Build only in dev mode
  if (config.dev) {
    const builder = new Builder(nuxt);
    await builder.build();
  } else {
    await nuxt.ready();
  }

  // Give app ability to parse json
  app.use(bodyparser.json());

  // Give app ability to get past CORS issues
  app.use(cors());

  // Give nuxt middleware to express
  app.use(nuxt.render);

  app.use('/title', titleRouter);

  app.get('/title', (req, res) => {
    consola.ready({
      message: `title from frontend: ${res.json()}`,
      badge: true,
    });

    const recommendationsURL = `https://tastedive.com/api/similar?q=and+then+there+were+none&type=books&info=1&k=${process.env.TASTE_DIVE_API_KEY}`;

    axios.get(recommendationsURL, (req, res) => {
      consola.ready({
        message: `from server/index.js: ${res.json()}`,
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
