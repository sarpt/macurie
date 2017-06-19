module.exports = function ($http) {
  return {
    list() {
      return $http.get('/api/conference/list');
    },
    detail(conferenceId) {
      return $http.get(`/api/conference/detail/${conferenceId}`);
    },
  };
};
