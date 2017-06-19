module.exports = function ($scope, $apiService, $routeParams) {
  $scope.paperId = $routeParams.id;
  $apiService.Paper.detail($scope.paperId)
    .then((result) => {
      $scope.paper = result.data.paper;
      $scope.author = result.data.paper.Author.User;
      $scope.file = result.data.paper.revisions[0];
    })
    .catch(error => console.log(error));
};

