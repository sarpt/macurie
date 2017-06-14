module.exports = function ($http) {
  return {
    register(userInfo) {
      $http.post();
    },
    login(email, password) {
      return $http.post('/api/user/login', { email, password });
    },
    get(id) {
      $http.get()
        .then();
    },
  };
};
