const express = require('express');

const staticLocalAuth = require('static-local-auth');
const serveIndex = require('serve-index');

const app = express();

app.use(staticLocalAuth());
app.use(express.static(
  '/public',
  {
    dotfiles: 'allow',
    index: false,
    redirect: false,
  },
));
app.use(serveIndex('/public'));

app.listen(8080);

