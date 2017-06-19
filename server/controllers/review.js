const models = require('../models');

const Review = models.Review;

module.exports = {
  add: (request, response) => {
  },
  listByReviewer: (request, response) => {
    Review.listByReviewer(request.params)
      .then(reviews => response.status(201).send({ reviews }))
      .catch(error => response.status(401).send({ message: error }));
  },
  listByPaper: (request, response) => {
    Review.listByPaper(models, request.params)
      .then(reviews => response.status(201).send({ reviews }))
      .catch(error => response.status(401).send({ message: error }));
  },
  detail: (request, response) => {
    Review.detail(request.params)
      .then(review => response.status(201).send({ review }))
      .catch(error => response.status(401).send({ message: error }));
  },
};
