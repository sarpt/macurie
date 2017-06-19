const paperController = require('../controllers/paper');
const auth = require('../auth');

module.exports = (app) => {
  app.post('/api/paper/add', auth.authenticate, paperController.add);
  app.get('/api/paper/list/conference/:conferenceId', auth.authenticate, paperController.listByConference);
  app.get('/api/paper/list/author/:authorId', auth.authenticate, paperController.listByAuthor);
  app.get('/api/paper/detail/:paperId', auth.authenticate, paperController.detail);
};

