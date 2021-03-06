module.exports = function ($scope, $userService) {
  const loggedSubscription = $userService.watchLogged((isLogged) => {
    $scope.logged = isLogged;
    $scope.userRole = $userService.getRoleType();
  });

  $scope.logout = () => {
    $userService.setLogged(false);
  };

  $scope.$on('$destroy', () => {
    /* $scope reference is "passed" to $userService, however there's no guarantee header's
    $scope will always be in memory, even though it's not supposed to be constructed dynamically
    by ng-view */
    loggedSubscription.unsubscribe();
  });
};
