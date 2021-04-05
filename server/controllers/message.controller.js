const message = require('../models/message');

// ------ Defines the function that the server will execute and exports them -------
exports.getAllMessages = async (ctx) => {
  try {
    ctx.body = await message.getAll(ctx);
    ctx.status = 203;
  } catch (error) {
    console.error(error);   // eslint-disable-line
    ctx.status = 500;
  }
}

exports.set = async (ctx) => {
  try {
    ctx.body = await message.post(ctx);    //.post(ctx.request.body)
    ctx.status = 201;
  } catch (error) {
    console.error(error);   // eslint-disable-line
    ctx.status = 500;
  }
}
// ---------------------------------------------------------------------------------