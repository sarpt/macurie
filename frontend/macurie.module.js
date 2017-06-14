const angular = require('angular');

const homeController = require('./Controllers/home.controller');
const headerController = require('./Controllers/header.controller');
const loginController = require('./Controllers/login.controller');
const dashboardController = require('./Controllers/dashboard.controller');
const userService = require('./Services/user.service');
const apiService = require('./Services/api.service');
const routeProvider = require('./macurie.routes');

module.exports = () => {
  const macurieModule = angular.module('macurieModule', ['ngRoute']);

  macurieModule.factory('$userService', userService);
  macurieModule.factory('$apiService', ['$http', apiService]);

  macurieModule.controller('homeController', ['$scope', homeController]);
  macurieModule.controller('headerController', ['$scope', '$userService', headerController]);
  macurieModule.controller('loginController', ['$scope', '$userService', '$apiService', loginController]);
  macurieModule.controller('dashboardController', ['$scope', '$userService', '$routeParams', dashboardController]);

  macurieModule.config(['$locationProvider', '$routeProvider', routeProvider]);
};
