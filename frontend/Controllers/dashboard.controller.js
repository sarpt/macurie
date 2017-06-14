module.exports = function ($scope, $userService, $routeParams) {
  $scope.userEmail = $userService.getUserEmail();
  $scope.token = $userService.getToken();

  if ($routeParams.view) {
    if ($routeParams.view === 'you') {
      $scope.view = 'you';
    } else if ($routeParams.view === 'settings') {
      $scope.view = 'settings';
    }
  }
};
