module.exports = function ($scope, $apiService, $routeParams, $userService, $location) {
  $scope.conferenceId = $routeParams.id;
  $scope.isAuthor = $userService.isAuthor();
  $apiService.Conference.detail($scope.conferenceId)
    .then((result) => {
      $scope.conference = result.data.conference;
      return $apiService.Paper.listByConference($scope.conferenceId);
    })
    .then((result) => {
      $scope.papers = result.data.papers;
    })
    .catch((error) => {
      console.log(error);
    });

  $scope.addPaper = () => {
    $location.path(`/paper/author/${$userService.getRoleId()}/conference/${$scope.conferenceId}/add`);
  };
};
