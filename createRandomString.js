'use strict';

module.exports = function createRandomString(size) {
  return Array(size).fill(0).map(() => Math.floor(Math.random() * size)).join('');
};

