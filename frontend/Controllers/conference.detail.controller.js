module.exports = function ($scope, $apiService, $routeParams) {
  $scope.conferenceId = $routeParams.id;
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
};
