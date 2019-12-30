const http = require('http');
const express = require('express');
const cors = require('cors');
const consola = require('consola');
const { Nuxt, Builder } = require('nuxt');
const app = express();
const server = http.Server(app);
const io = require('socket.io')(server);
const router = express.Router();

// Import and Set Nuxt.js options
const config = require('../nuxt.config.js');
config.dev = process.env.NODE_ENV !== 'production';

const { IOServer } = require('./io');

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
  app.use(express.json());

  // Give app ability to get past CORS issues
  app.use(cors());

  // Give nuxt middleware to express
  app.use(nuxt.render);

  let titleFromUser = '';

  io.on('connection', (socket) => {
    socket.on('titleFromUser', (data) => {
      titleFromUser = data;
      consola.ready({
        message: `titleFromUser on server: ${titleFromUser}`,
        badge: true,
      });
    });
  });

  const recommendationsURL = `https://tastedive.com/api/similar?q=${titleFromUser}&type=books&info=1&k=${process.env.TASTE_DIVE_API_KEY}`;

  router.get(recommendationsURL, (req, res) => {
    consola.ready({
      message: res.json(),
      badge: true,
    });
  });

  // Listen to the server
  server.listen(port, host, () => {
    consola.ready({
      message: `Server listening on http://${host}:${port}`,
      badge: true,
    });

    // Start the socket.io server
    const ioServer = IOServer({ host, port, server });
    ioServer.start();
  });
}
start();
