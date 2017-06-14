const apiUser = require('./api.user.service');

module.exports = function ($http) {
  return {
    User: apiUser($http),
  };
};
