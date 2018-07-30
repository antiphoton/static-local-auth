'use strict';

const createRandomString = require('./createRandomString');
const getCookies = require('./getCookies');
const queryName = require('./queryName');
const cookieName = require('./cookieName');
const printInstructions = require('./printInstructions');
const writePage = require('./writePage');

module.exports = function createQrAuthMiddleware() {
  const answer = createRandomString(32);
  return function qrAuthMiddleware(req, res, next) {
    if (req.query[queryName]) {
      if (req.query[queryName] === answer) {
        res.json(true);
      } else {
        res.json(false);
      }
    } else {
      const cookies = getCookies(req);
      if (cookies[cookieName] !== answer) {
        printInstructions(req, answer);
        writePage(res);
      } else {
        next();
      }
    }
  };
};

