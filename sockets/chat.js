const getDateFormated = require('../utils/getDateFormated');
const model = require('../models/messages');
const genToken = require('../utils/genToken');

module.exports = (io) => {
  io.on('connection', (socket) => {
    socket.emit('nick', genToken(16));

    socket.on('message', ({ chatMessage, nickname }) => {
      const date = new Date();
      model.insert({ nickname, chatMessage, date });
      io.emit('message', `${getDateFormated(date)} - ${nickname} ${chatMessage}`);
    });

    socket.on('changeNick', ({ nickname, newNick }) => {
      model.updateMany({ nickname }, { nickname: newNick });
      socket.emit('nick', newNick);
    });
  });
};
