describe('Test in Login controller that', () => {
  beforeEach(angular.mock.module('macurieModule'));

  let $controller,
    $userService,
    $httpBackend,
    $apiService,
    $location,
    $scope,
    controller;

  beforeEach(() => {
    angular.mock.inject(($injector) => {
      $controller = $injector.get('$controller');
      $userService = $injector.get('$userService');
      $httpBackend = $injector.get('$httpBackend');
      $apiService = $injector.get('$apiService');
      $location = $injector.get('$location');
      $scope = {};
      controller = $controller('loginController', { $scope, $userService, $apiService, $location });
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
        password: 'mikemike',
      };

      $httpBackend.when('POST', '/api/user/login', userInfo)
        .respond(201, { token: 'token', info: {} });
      $scope.user = userInfo;
      $scope.submit(true);

      $httpBackend.flush();
      expect($scope.showSuccess).toEqual(true);
      expect($scope.showFailure).toEqual(false);
      expect($scope.message).toEqual('Login Successful');
    });

    it('are expected during unsuccesful request to be false and message to be properly set', () => {
      const userInfo = {
        email: 'mike@mike',
        password: '',
      };
      $httpBackend.when('POST', '/api/user/login', userInfo)
        .respond(401, { message: 'Wrong password' });
      $scope.user = userInfo;
      $scope.submit(true);

      $httpBackend.flush();
      expect($scope.showFailure).toEqual(true);
      expect($scope.showSuccess).toEqual(false);
      expect($scope.message).toEqual('Wrong password');
    });

    it('are expected to be false after submiting empty form', () => {
      $scope.send($scope.$form.loginViewForm.$valid);

      expect($scope.showFailue).toEqual(true);
      expect($scope.showSucces).toEqual(false);
      expect($scope.message).toEqual('Invalid form information');
    });
  });
});
