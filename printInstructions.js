'use strict';

const chalk = require('chalk');

module.exports = function printInstructions(req, answer) {
  console.log(`Rejected request from ${chalk.red(req.ip)} to ${chalk.blue(req.originalUrl)}`);
  console.log(`Passcode is ${chalk.green(answer)}`);
};

