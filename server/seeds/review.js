const database = require('../models');

const Review = database.Review;

module.exports = () => {
  const allOperations = [];

  const jsConf1PaperReview = {
    state: 'accepted',
    comment: 'No comment',
  };
  allOperations.push(Review.create(jsConf1PaperReview)
    .then((review) => {
      review.setReviewer(1);
    }));

  const jsConf2PaperReview = {
    state: 'accepted',
    comment: 'No comment',
  };
  allOperations.push(Review.create(jsConf2PaperReview)
    .then((review) => {
      review.setReviewer(1);
    }));

  const medConf1PaperReview = {
    state: 'accepted',
    comment: 'No comment',
  };
  allOperations.push(Review.create(medConf1PaperReview)
    .then((review) => {
      review.setReviewer(1);
    }));

  const gesaConf1PaperReview = {
    state: 'accepted',
    comment: 'No comment',
  };
  allOperations.push(Review.create(gesaConf1PaperReview)
    .then((review) => {
      review.setReviewer(1);
    }));

  return Promise.all(allOperations);
};
