module.exports = function ($scope, $apiService, $routeParams) {
  $scope.showSuccess = false;
  $scope.showError = false;
  $scope.conferenceId = $routeParams.conferenceId;
  $scope.authorId = $routeParams.authorId;

  $scope.submit = (isValid) => {
    if (isValid) {
      $apiService.Paper.upload($scope.paper, $scope.conferenceId, $scope.authorId, $scope.file)
        .then((result) => {
          $scope.showSuccess = true;
          console.log(result);
        })
        .catch((reason) => {
          $scope.showError = true;
          console.log(reason);
        });
    }
  };
};
