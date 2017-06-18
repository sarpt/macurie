module.exports = function ($scope, $userService, $apiService) {
  $scope.submit = (user) => {
    $apiService.User.login(user)
      .then(
        (result) => {
          $userService.setUserEmail(user.email);
          $userService.setUser(result.data);
        },
        (reason) => {
          console.log(reason);
        }
      );
  };
};

