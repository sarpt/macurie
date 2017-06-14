const route = require('angular-route');

module.exports = function ($locationProvider, $routeProvider) {
  /*
  otherwise routing wont work:
  angular will automatically add shebang #! and router will look for links without it
  no idea why
  */
  $locationProvider.hashPrefix('');

  $routeProvider
    .when('/home', {
      templateUrl: '/Views/home.view.html',
      controller: 'homeController',
    })
    .when('/login', {
      templateUrl: '/Views/login.view.html',
      controller: 'loginController',
    })
    .when('/dashboard', {
      redirectTo: '/dashboard/you',
    })
    .when('/dashboard/:view', {
      templateUrl: '/Views/dashboard.view.html',
      controller: 'dashboardController',
    })
    .otherwise('/home');
};
