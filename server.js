const express = require('express');
const next = require('next');
const proxy = require('http-proxy-middleware');
const routes = require('./routes');

const port = parseInt(process.env.PORT, 10) || 4000;
const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev });
const nextHandler = routes.getRequestHandler(app);

app.prepare().then(() => {
  const server = express();

  const proxyOptions = {
    target: 'https://minddock-be.herokuapp.com',
    pathRewrite: { '^/api/': '/' },
    changeOrigin: true,
    logLevel: 'debug',
  };

  server.use('/api/**', proxy(proxyOptions));

  server.all('*', (req, res) => {
    return nextHandler(req, res);
  });

  server.listen(port, err => {
    if (err) throw err;
    console.log(`> Ready on http://localhost:${port}`);
  });
});
