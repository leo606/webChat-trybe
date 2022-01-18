const model = require('../../models/messages');
const formatedDate = require('../../utils/getDateFormated');

module.exports = async (_req, res) => {
  try {
    const messagesHistory = await model.list();
    const messages = messagesHistory.map(
      (msg) => `${formatedDate(msg.date)} - ${msg.nickname} ${msg.chatMessage}`,
    );

    res.status(200).render('chat', { messages });
  } catch (e) {
    console.log(e);
  }
};
