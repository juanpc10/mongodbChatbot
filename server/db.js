/*
require(‘mongoldb’) ->>> returns {some object}
{some object}.MongoClient
*/

const MongoClient = require('mongodb').MongoClient, format = require('util').format;
const url = 'mongodb://127.0.0.1:27017';
const dbName = 'chatBot';
let db = {};
db.mongo = new MongoClient(url);


db.mongo.connect((err, client) => {
  if (err) {
    throw err;
  } else {
    db.conn = db.mongo.db(dbName);
    console.log(`Connected to the database`);
  }
});

module.exports = db;