module.exports = function ($scope, $userService, $apiService) {
  $scope.submit = (user) => {
    $apiService.User.login(user)
      .then(
        (result) => {
          $userService.setLogged(true);
          $userService.setUserEmail(user.email);
          $userService.setToken(result.data.token);
        },
        (reason) => {
          console.log(reason);
        }
      );
  };
};

