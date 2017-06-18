const conferenceController = require('../controllers/conference');

module.exports = (app) => {
  app.get('/api/conference/list', conferenceController.list);
  app.get('/api/conference/detail/:conferenceId', conferenceController.detail);
};
