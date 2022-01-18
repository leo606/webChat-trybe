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

// {
//   "_id": {
//     "$oid": "61e705f4a0209eb433605870"
//   },
//   "nickname": "9c79d9ic68ei89g7",
//   "chatMessage": "ghjghjghjghjghj",
//   "sId": "s1GFv9wd_zZYttIqAAAJ"
// }
