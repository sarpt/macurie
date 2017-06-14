const env = process.env.NODE_ENV || 'development';
const config = require('./cfg.json');

module.exports = config[env];
