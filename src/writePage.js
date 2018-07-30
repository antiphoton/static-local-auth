'use strict';

const path = require('path');

const pug = require('pug');

const cookieName = require('./cookieName');
const queryName = require('./queryName');

const html = pug.renderFile(
  path.join(__dirname, 'page', 'index.pug'),
  {
    cookieName,
    queryName,
  },
);

module.exports = function writePage(res) {
  res.set('Content-Type', 'text/html');
  res.send(html);
  res.end();
};

