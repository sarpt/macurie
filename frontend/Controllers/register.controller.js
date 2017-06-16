module.exports = function ($scope, $apiService) {
  $scope.submit = (isValid) => {
    if (isValid) {
      $apiService.User.register($scope.user)
        .then(
          (result) => {
            console.log(result);
          },
          (reason) => {
            console.log(reason);
          }
        );
    }
  };
};

