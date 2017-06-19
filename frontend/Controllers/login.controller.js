module.exports = function ($scope, $userService, $apiService, $location) {
  $scope.showSuccess = false;
  $scope.showFailure = false;
  $scope.message = '';

  $scope.submit = (isValid) => {
    if (isValid) {
      $apiService.User.login($scope.user)
        .then(
          (result) => {
            $userService.setUserEmail($scope.user.email);
            $userService.setUser(result.data);
            $scope.showSuccess = true;
            $scope.message = 'Login Successful';
          },
          (reason) => {
            $scope.showFailure = true;
            $scope.message = reason.data.message;
          }
        );
    } else {
      $scope.showFailure = true;
      $scope.message = 'Invalid form information';
    }
  };

  $scope.dismissError = () => {
    $scope.showFailure = false;
  };

  $scope.clickOk = () => {
    $location.path('/dashboard');
  };
};

