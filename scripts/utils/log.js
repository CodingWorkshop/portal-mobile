const dayjs = require('dayjs');

function log(option) {
  `[${dayjs().format('YYYY-MM-DD HH:mm:ss')}][${option.type}]:${option.description}`
}

module.exports = log;
