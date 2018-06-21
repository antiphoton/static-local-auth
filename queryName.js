const createRandomString = require('./createRandomString');

const queryName = 'q' + createRandomString(30);

module.exports = queryName;


