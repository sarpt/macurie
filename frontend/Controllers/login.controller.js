module.exports = function ($scope, $userService) {
  $scope.submit = function (user) {
    $userService.setLogged(true);
    $userService.setUserEmail(user.email);
  };
};

