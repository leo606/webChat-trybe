const getDateFormated = require('../utils/getDateFormated');

module.exports = (io) => {
  io.on('connection', (socket) => {
    socket.on('message', ({ chatMessage, nickname }) => {
      const date = getDateFormated();
      io.emit('message', `${date} - ${nickname} ${chatMessage}`);
    });
  });
};