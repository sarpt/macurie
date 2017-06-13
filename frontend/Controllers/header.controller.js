module.exports = function ($scope, $userService) {
  $scope.logged = false;
  $userService.watchLogged(function (newVal) {
    $scope.logged = newVal;
  });
};
