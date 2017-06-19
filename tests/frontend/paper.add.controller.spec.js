describe('Test in Paper Add controller that', () => {
  beforeEach(angular.mock.module('macurieModule'));

  let $controller,
    $httpBackend,
    $apiService,
    $routeParams,
    $userService,
    $location,
    $scope,
    controller;

  beforeEach(() => {
    angular.mock.inject(($injector) => {
      $controller = $injector.get('$controller');
      $httpBackend = $injector.get('$httpBackend');
      $apiService = $injector.get('$apiService');
      $routeParams = $injector.get('$routeParams');
      $userService = $injector.get('$userService');
      $location = $injector.get('$location');
      $scope = {};
      $userService.setRole('author');
      $routeParams.conferenceId = 1;
      $routeParams.authorId = 2;
      controller = $controller('paperAddController', { $scope, $apiService, $routeParams, $userService, $location });
    });
  });

  describe('Error booleans', () => {

    it('are expected to be false and message to be an empty string', () => {
      expect($scope.showSuccess).toEqual(false);
      expect($scope.showFailure).toEqual(false);
      expect($scope.message).toEqual('');
    });

  });

  describe('Route params', () => {
    it('are expected to be defined', () => {
      expect($scope.conferenceId).toBeDefined();
      expect($scope.authorId).toBeDefined();
    });
  });
});

