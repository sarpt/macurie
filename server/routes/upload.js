const uploadController = require('../controllers/upload');

module.exports = (app) => {
  app.post('/api/upload', uploadController.upload);
};

