const apiUser = require('./api.user.service');
const apiConference = require('./api.conference.service');
const apiPaper = require('./api.paper.service');

module.exports = function ($http, $fileUpload) {
  return {
    User: apiUser($http),
    Conference: apiConference($http),
    Paper: apiPaper($http, $fileUpload),
  };
};
