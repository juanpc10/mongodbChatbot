const db = require('../db.js');

// ------ Defines the function that will do the queries to the database and export them -------
exports.getAll = async () => {
  const messages = await db.conn.collection('messages').find().toArray();
  return messages;
};


exports.post = async (ctx) => {
  const result = await db.conn.collection('messages').insertOne({ authorId: ctx.request.body.authorId, content: ctx.request.body.content, timestamp: ctx.request.body.timestamp });
  return result;
};