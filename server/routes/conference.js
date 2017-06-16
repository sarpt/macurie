const conferenceController = require('../controllers/conference');

module.exports = (app) => {
  app.post('/api/conference/list', conferenceController.list);
  app.post('/api/conference/detail', conferenceController.detail);
};
