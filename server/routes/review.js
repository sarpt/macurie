const reviewController = require('../controllers/review');

module.exports = (app) => {
  app.post('/api/review/add', reviewController.add);
  app.get('/api/review/list/reviewer/:reviewerId', reviewController.listByReviewer);
  app.get('/api/review/list/paper/:paperId', reviewController.listByPaper);
  app.get('/api/review/detail/:reviewId', reviewController.detail);
};
