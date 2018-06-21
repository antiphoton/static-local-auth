const createRandomString = require('./createRandomString');

const cookieName = createRandomString(30);

module.exports = cookieName;

