const paperController = require('../controllers/paper');

module.exports = (app) => {
  app.post('/api/paper/list', paperController.listByConference);
  app.post('/api/paper/list', paperController.listByAuthor);
  app.post('/api/paper/add', paperController.add);
  app.post('/api/paper/detail', paperController.detail);
};

