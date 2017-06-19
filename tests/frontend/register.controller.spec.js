describe('Test in Register controller that', () => {
  beforeEach(angular.mock.module('macurieModule'));

  let $controller,
    $httpBackend,
    $apiService,
    $location,
    $scope,
    controller;

  beforeEach(() => {
    angular.mock.inject(($injector) => {
      $controller = $injector.get('$controller');
      $httpBackend = $injector.get('$httpBackend');
      $apiService = $injector.get('$apiService');
      $location = $injector.get('$location');
      $scope = {};
      controller = $controller('registerController', { $scope, $apiService, $location });
    });
  });

  describe('Error booleans', () => {

    it('are expected to be false and message to be an empty string', () => {
      expect($scope.showSuccess).toEqual(false);
      expect($scope.showFailure).toEqual(false);
      expect($scope.message).toEqual('');
    });

    it('are expected during successful request to be true and message to be properly set', () => {
      const userInfo = {
        email: 'mike@mike',
        password: '',
        name: 'mike',
        surname: 'mike',
        nick: 'mike',
        address: 'address',
        role: 'author',
      };

      $httpBackend.when('POST', '/api/user/register', userInfo)
        .respond(201, { message: 'Registration successful' });
      
      $scope.user = userInfo;
      $scope.submit(true);

      $httpBackend.flush();
      expect($scope.showSuccess).toEqual(true);
      expect($scope.showFailure).toEqual(false);
      expect($scope.message).toEqual('Registration successful');
    });

    it('are expected during successful request to be true and message to be properly set', () => {
      const userInfo = {
        email: 'mike@mike',
        password: '',
        name: 'mike',
        surname: 'mike',
        nick: 'mike',
        address: 'address',
        role: 'author',
      };
      $httpBackend.when('POST', '/api/user/register', userInfo)
        .respond(401, { message: 'Email not unique' });
      
      $scope.user = userInfo;
      $scope.submit(true);

      $httpBackend.flush();
      expect($scope.showFailure).toEqual(true);
      expect($scope.showSuccess).toEqual(false);
      expect($scope.message).toEqual('Email not unique');
    });
  });
});
