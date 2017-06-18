module.exports = function ($scope, $apiService, $location) {
  $scope.showSuccess = false;
  $scope.showFailure = false;
  $scope.message = '';

  $scope.submit = (isValid) => {
    if (isValid) {
      $apiService.User.register($scope.user)
        .then(
          (result) => {
            $scope.showSuccess = true;
            $scope.message = result.data.message;
            console.log(result);
          },
          (reason) => {
            $scope.showFailure = true;
            $scope.message = reason.data.message;
            console.log(reason);
          }
        );
    }
  };

  $scope.dismissError = () => {
    $scope.showFailure = false;
  };

  $scope.clickOk = () => {
    $location.path('/login');
  };
};

