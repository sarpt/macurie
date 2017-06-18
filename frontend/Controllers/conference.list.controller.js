module.exports = function ($scope, $apiService) {
  $apiService.Conference.list()
    .then((result) => {
      $scope.conferences = result.data.conferences;
    })
    .catch((error) => {
      console.log(error);
    });
};
