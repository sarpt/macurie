const paperController = require('../controllers/paper');

module.exports = (app) => {
  app.post('/api/paper/add', paperController.add);
  app.get('/api/paper/list/conference/:conferenceId', paperController.listByConference);
  app.get('/api/paper/list/author/:authorId', paperController.listByAuthor);
  app.get('/api/paper/detail/:paperId', paperController.detail);
};

