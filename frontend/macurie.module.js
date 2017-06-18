const angular = require('angular');
const angularFileUpload = require('ng-file-upload');

const homeController = require('./Controllers/home.controller');
const headerController = require('./Controllers/header.controller');
const loginController = require('./Controllers/login.controller');
const registerController = require('./Controllers/register.controller');
const dashboardController = require('./Controllers/dashboard.controller');
const conferenceListController = require('./Controllers/conference.list.controller');
const conferenceDetailController = require('./Controllers/conference.detail.controller');
const paperAddController = require('./Controllers/paper.add.controller');
const paperDetailController = require('./Controllers/paper.detail.controller');
const reviewAddController = require('./Controllers/review.add.controller');
const reviewDetailController = require('./Controllers/review.detail.controller');

const userService = require('./Services/user.service');
const apiService = require('./Services/api.service');
const routeProvider = require('./macurie.routes');

module.exports = function () {
  const macurieModule = angular.module('macurieModule', ['ngRoute', 'ngFileUpload']);

  macurieModule.factory('$userService', userService);
  macurieModule.factory('$apiService', ['$http', 'Upload', apiService]);

  macurieModule.controller('homeController', ['$scope', homeController]);
  macurieModule.controller('headerController', ['$scope', '$userService', headerController]);
  macurieModule.controller('loginController', ['$scope', '$userService', '$apiService', loginController]);
  macurieModule.controller('registerController', ['$scope', '$apiService', registerController]);
  macurieModule.controller('dashboardController', ['$scope', '$userService', '$routeParams', dashboardController]);
  macurieModule.controller('conferenceListController', ['$scope', '$apiService', conferenceListController]);
  macurieModule.controller('conferenceDetailController', ['$scope', '$apiService', '$routeParams', '$userService', conferenceDetailController]);
  macurieModule.controller('paperAddController', ['$scope', '$apiService', '$routeParams', paperAddController]);
  macurieModule.controller('paperDetailController', ['$scope', '$apiService', '$routeParams', paperDetailController]);
  macurieModule.controller('reviewAddController', ['$scope', '$apiService', reviewAddController]);
  macurieModule.controller('reviewDetailController', ['$scope', '$apiService', reviewDetailController]);

  macurieModule.config(['$locationProvider', '$routeProvider', routeProvider]);
};
