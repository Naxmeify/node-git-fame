var cedar = require("cedar");

global.log = require('cedar')([
  {
    transport: 'console',
    level: process.env.LOG_LEVEL || 'warn',
    space: '  '
  }
]);
