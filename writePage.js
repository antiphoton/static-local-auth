'use strict';

const cookieName = require('./cookieName');
const queryName = require('./queryName');

module.exports = function writePage(res) {
  res.render(
    `${__dirname}/page/index.pug`,
    {
      cookieName,
      queryName,
    },
  );
};

