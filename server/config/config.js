const env = process.env.NODE_ENV || 'development';
const config = require(`${__dirname}/../config/config.json`);

module.exports = config[env];
