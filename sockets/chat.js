const getDateFormated = require('../utils/getDateFormated');

const chatMessages = [];

module.exports = (io) => {
  io.on('connection', (socket) => {
    socket.emit('nick', socket.id);

    socket.on('message', ({ chatMessage, nickname }) => {
      chatMessages.push({ nickname, chatMessage, sId: socket.id });
      io.emit('message', `${getDateFormated()} - ${nickname} ${chatMessage}`);
    });

    socket.on('changeNick', (nick) => {
      chatMessages.map((msg) => (msg.sId === socket.id ? { ...msg, nickname: nick } : msg));
      socket.emit('nick', nick);
    });
  });
};
