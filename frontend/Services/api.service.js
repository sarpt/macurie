const apiUser = require('./api.user.service');
const apiConference = require('./api.conference.service');
const apiPaper = require('./api.paper.service');

module.exports = function ($http, $fileUpload, $userService) {
  return {
    User: apiUser($http, $userService),
    Conference: apiConference($http, $userService),
    Paper: apiPaper($http, $fileUpload, $userService),
  };
};
