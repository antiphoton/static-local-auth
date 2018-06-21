'use strict';

const cookie = require('cookie');

module.exports = function getCookies(req, secrets) {
  if (req.cookies) {
    return req.cookies;
  }
  const cookies = cookie.parse(req.headers.cookie || '');
  return cookies;
};

