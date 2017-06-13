module.exports = function ($scope, $userService) {
  $scope.logged = $userService.isLogged();
};
