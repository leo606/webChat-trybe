const connection = require('../connection');

module.exports = async () => {
  try {
    const messages = await connection().then((db) => db.collection('messages').find().toArray());
    return messages;
  } catch (e) {
    console.log(e);
  }
};