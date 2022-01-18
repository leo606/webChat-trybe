const model = require('../models/messages');
const getDateFormated = require('../utils/getDateFormated');

module.exports = (io, { chatMessage, nickname }) => {
  const date = new Date();
  model.insert({ nickname, chatMessage, date });
  io.emit('message', `${getDateFormated(date)} - ${nickname} ${chatMessage}`);
};