const route = require('angular-route');

module.exports = function ($locationProvider, $routeProvider) {
  /*
  otherwise routing won't work:
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
    .when('/register', {
      templateUrl: '/Views/register.view.html',
      controller: 'registerController',
    })
    .when('/dashboard', {
      redirectTo: '/dashboard/you',
    })
    .when('/dashboard/:view', {
      templateUrl: '/Views/dashboard.view.html',
      controller: 'dashboardController',
    })
    .when('/conference', {
      templateUrl: '/Views/conference.list.view.html',
      controller: 'conferenceListController',
    })
    .when('/conference/:id', {
      templateUrl: '/Views/conference.detail.view.html',
      controller: 'conferenceDetailController',
    })
    .when('/paper/:id', {
      templateUrl: '/Views/paper.detail.view.html',
      controller: 'paperDetailController',
    })
    .when('/paper/author/:authorId/conference/:conferenceId/add', {
      templateUrl: '/Views/paper.add.view.html',
      controller: 'paperAddController',
    })
    .otherwise('/home');
};
