const route = require('angular-route');

module.exports = function ($routeProvider) {
  $routeProvider
    .when('/home', {
      templateUrl: '/Views/home.view.html',
      controller: 'homeController',
    })
    .when('/login', {
      templateUrl: '/Views/login.view.html',
      controller: 'loginController',
    })
    .otherwise({
      redirectTo: '/home',
    });
};
