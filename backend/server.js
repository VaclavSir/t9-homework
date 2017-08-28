const Koa = require('koa');
const suggest = require('./suggest');

const app = new Koa;

const suggestRoute = /\/suggest\/([1-9]+)$/;
app.use(async context => {
  const matches = suggestRoute.exec(context.request.path);
  if (matches !== null) {
    const digitsSequence = matches[1];
    context.response.body = JSON.stringify({ suggest: suggest(digitsSequence) });
    context.response.type = 'application/json';
  }
});

app.listen(3000);
