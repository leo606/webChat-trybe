const connection = require('../connection');

module.exports = async (filter, update) => {
  try {
    const db = await connection();
    await db.collection('messages').updateMany(filter, { $set: update });
  } catch (e) {
    console.log(e);
  }
};