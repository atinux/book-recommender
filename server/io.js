const http = require('http');
const fs = require('fs');
const consola = require('consola');
const socketIO = require('socket.io');

function IOServer({ host, port, server = http.createServer() }) {
  let _io;

  function registerIO(io) {
    const namespaces = fs.readdirSync('./server/namespaces').map((file) => file.replace('.js', ''));

    namespaces.forEach((namespace) => {
      io.of(`/${namespace}`).on('connection', (socket) => {
        consola.info(`socket.io client connected to ${namespace}`);
        const svc = require(`./namespaces/${namespace}`).Svc(socket, io);
        Object.entries(svc).forEact(([evt, fn]) => {
          if (typeof fn === 'function') {
            socket.on(evt, (msg, cb) => {
              fn({
                notify: ({ evt: notifyEvt, data }) => {
                  socket.emit(notifyEvt, data);
                },
                ...msg,
              }).then(cb);
            });
          }
        });
        socket.on('disconnect', () => {
          consola.info(`client disconnected from ${namespace}`);
        });
      });
    });
  }

  function listen() {
    return new Promise((resolve, reject) => {
      server
        .listen(port, host)
        .on('error', reject)
        .on('listening', resolve);
    });
  }

  async function start() {
    consola.info(`Starting IO server... ${host}${port}${server.listening}`);
    if (!server.listening) {
      consola.info('IO server not listening. Will fix that');
      await listen();
    }
    _io = socketIO(server);
    return _io;
  }

  function stop() {
    return new Promise((resolve) => _io.close(resolve));
  }

  return Object.freeze({
    registerIO,
    start,
    stop,
  });
}

module.exports = {
  IOServer,
};
