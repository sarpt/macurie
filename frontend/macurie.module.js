const angular = require('angular');

const homeController = require('./Controllers/home.controller');
const headerController = require('./Controllers/header.controller');
const loginController = require('./Controllers/login.controller');
const userService = require('./Services/user.service');
const routeProvider = require('./macurie.routes');

module.exports = () => {
  const macurieModule = angular.module('macurieModule', ['ngRoute']);

  macurieModule.factory('$userService', userService);
  macurieModule.controller('homeController', ['$scope', homeController]);
  macurieModule.controller('headerController', ['$scope', '$userService', headerController]);
  macurieModule.controller('loginController', ['$scope', '$userService', loginController]);

  macurieModule.config(['$routeProvider', routeProvider]);
};
