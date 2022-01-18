const connection = require('../connection');

module.exports = async (message) => {
  try {
    const db = await connection();
    const inserted = await db.collection('messages').insertOne(message);
    return inserted;
  } catch (e) {
    console.log(e);
  }
};