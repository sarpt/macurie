module.exports = function ($http, $fileUpload, $userService) {
  const token = $userService.getToken();
  return {
    listByConference(conferenceId) {
      return $http.get(`/api/paper/list/conference/${conferenceId}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
    },
    listByAuthor(authorId) {
      return $http.get(`'/api/paper/list/author/${authorId}`);
    },
    add(conferenceId, authorId) {

    },
    detail(paperId) {
      return $http.get(`/api/paper/detail/${paperId}`);
    },
    upload(paperInfo, conferenceId, authorId, file) {
      return $fileUpload.http({
        url: '/api/upload',
        data: file,
        headers: {
          'Content-Type': undefined,
        },
      })
        .then((result) => {
          const filename = result.data.filename;
          return $http.post('/api/paper/add', {
            title: paperInfo.title,
            subject: paperInfo.subject,
            summary: paperInfo.summary,
            filename,
            conferenceId,
            authorId,
          });
        });
    },
  };
};
