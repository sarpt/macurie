module.exports = function ($http) {
  return {
    listByConference(conferenceId) {
      return $http.get(`/api/paper/list/conference/${conferenceId}`);
    },
    listByAuthor(authorId) {

    },
    add(conferenceId, authorId) {

    },
    detail(paperId) {

    },
  };
};
