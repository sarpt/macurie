const reviewController = require('../controllers/review');

module.exports = (app) => {
  app.post('/api/review/add', reviewController.add);
  app.post('/api/review/detail', reviewController.detail);
};
