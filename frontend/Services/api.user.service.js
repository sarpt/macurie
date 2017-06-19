module.exports = function ($http) {
  return {
    register(userInfo) {
      return $http.post('/api/user/register', {
        email: userInfo.email,
        password: userInfo.password,
        nick: userInfo.nick,
        name: userInfo.name,
        surname: userInfo.surname,
        address: userInfo.address,
        role: userInfo.role,
      });
    },
    login(userInfo) {
      return $http.post('/api/user/login', {
        email: userInfo.email,
        password: userInfo.password,
      });
    },
    detail(id) {
      return $http.get(`/api/user/detail/${id}`);
    },
  };
};
