// ------ Creates the server -------
const Koa = require('koa');
const app = new Koa();
// ---------------------------------

const mongo = require('koa-mongo');


// ------ Extra declarations -------
// For the middlewares
const serve = require('koa-static');
const bodyParser = require('koa-bodyparser');
const router = require('./router');
const path = require('path');

// For the listening
const port = 3000;
const hostname = 'localhost';
// ---------------------------------


// ------ Defines the middlewares -------
app
  .use(serve(path.join(__dirname, '../chat-client')))
  .use(bodyParser())
  .use(mongo())
  .use(router.routes());
// --------------------------------------


// ------ Listening the port and showing a message -------
app.listen(port, hostname, () => console.log(`Server running at http://${hostname}:${port}`)); // eslint-disable-line
// -------------------------------------------------------