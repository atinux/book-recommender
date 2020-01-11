const consola = require('consola');
const titleRouter = require('express').Router();

titleRouter.get('/title', (req, res) => {
  res
    .status(200)
    .json({ title: req.body })
    .then((data) => {
      consola.ready({
        message: `get title is ${data}`,
        badge: true,
      });
    })
    .catch((error) => {
      consola.error({
        message: `~api/title get Something went wrong: ${error}`,
        badge: true,
      });
      throw new Error(error);
    });
});

titleRouter.post('/title', (req, res) => {
  res
    .status(200)
    .json({ title: req.body })
    .then((data) => {
      consola.ready({
        message: `post title is ${data}`,
        badge: true,
      });
    })
    .catch((error) => {
      consola.error({
        message: `~api/title post Something went wrong: ${error}`,
        badge: true,
      });
      throw new Error(error);
    });
});

module.exports = titleRouter;
