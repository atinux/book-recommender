const express = require('express');
const consola = require('consola');

const router = express.Router();
// const app = express();

// router.use((req, res, next) => {
//   Object.setPrototypeOf(req, app.request);
//   Object.setPrototypeOf(res, app.response);
//   req.res = res;
//   res.req = req;
//   next();
// });

router.post('/title', (req, res) => {
  try {
    consola.ready({
      message: `Title is ${req.body.title}`,
      badge: true,
    });
    res.status(200).json({ title: req.body.title });
  } catch (error) {
    consola.error({
      message: `~api/title Something went wrong: ${error}`,
      badge: true,
    });
  }
});

module.exports = {
  path: '/title',
  handler: router,
};
