const compress = require('koa-compress');
const { Z_SYNC_FLUSH: flush } = require('zlib');
const Koa = require('koa');
const serve = require('koa-static');

const app = new Koa();

// serve build
app.use(compress({
  filter: (contentType) => /text/i.test(contentType),
  flush,
  threshold: 2048,
}));
app.use(serve(`${__dirname}/public`));

// launch the server
const PORT = Number(process.env.PORT) || 8080;
app.listen(PORT);
