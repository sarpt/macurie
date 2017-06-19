module.exports = function ($scope, $apiService, $routeParams, $userService, $location) {
  $scope.showSuccess = false;
  $scope.showFailure = false;
  $scope.message = '';

  if (!$userService.isAuthor()) {
    $location.path('/login');
  }

  $scope.conferenceId = $routeParams.conferenceId;
  $scope.authorId = $routeParams.authorId;

  $scope.submit = (isValid) => {
    if (isValid && $scope.file) {
      $apiService.Paper.upload($scope.paper, $scope.conferenceId, $scope.authorId, $scope.file)
        .then((result) => {
          $scope.showSuccess = true;
          $scope.message = 'Paper successfuly added.';
        })
        .catch((reason) => {
          $scope.showFailure = true;
          $scope.message = reason.data.message;
        });
    } else if (!$scope.file) {
      $scope.showFailure = true;
      $scope.message = 'File not provided';
    } else {
      $scope.showFailure = true;
      $scope.message = 'Invalid form';
    }
  };

  $scope.dismissError = () => {
    $scope.showFailure = false;
  };

  $scope.clickOk = () => {
    $location.path(`/conference/${$scope.conferenceId}`);
  };
};
