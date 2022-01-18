const getDateFormated = require('../utils/getDateFormated');
const model = require('../models/messages');
const genToken = require('../utils/genToken');

const chatMessages = [];

module.exports = (io) => {
  io.on('connection', (socket) => {
    socket.emit('nick', genToken(16));

    socket.on('message', ({ chatMessage, nickname }) => {
      chatMessages.push({ nickname, chatMessage, sId: socket.id });
      const date = getDateFormated();
      model.insert({ nickname, chatMessage, sId: socket.id, date: new Date() });
      io.emit('message', `${date} - ${nickname} ${chatMessage}`);
    });

    socket.on('changeNick', (nick) => {
      chatMessages.map((msg) => (msg.sId === socket.id ? { ...msg, nickname: nick } : msg));
      socket.emit('nick', nick);
    });
  });
};
