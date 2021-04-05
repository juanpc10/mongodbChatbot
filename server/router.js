// ------ Creates a router -------
const Router = require('koa-router');
const router = new Router();
// -------------------------------

// ------ Extra declarations -------
// To define the functions
const message = require('./controllers/message.controller');
// ---------------------------------


// ------ Define the function that we want to run when gets an http request to an specific route -------
router.get('/messages', message.getAllMessages);
router.post('/messages', message.set);
// -----------------------------------------------------------------------------------------------------


// ------ Exports a router -------
module.exports = router;
// -------------------------------