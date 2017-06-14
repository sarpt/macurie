module.exports = function ($scope, $userService, $apiService) {
  $scope.submit = function (user) {
    $apiService.User.login(user.email, user.password)
      .then(
        (result) => {
          $userService.setLogged(true);
          $userService.setUserEmail(user.email);
          $userService.setToken(result.data.token);
          console.log('success!');
        },
        (reason) => {
          console.log('login failure:\n' + reason.data.message);
        }
      );
  };
};

