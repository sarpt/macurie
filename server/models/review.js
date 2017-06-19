module.exports = (sequelize, DataTypes) => {
  const Review = sequelize.define('Review', {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
    },
    state: {
      type: DataTypes.ENUM('accepted', 'rejected'),
      allowNull: false,
    },
    comment: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    classMethods: {
      associate: (models) => {
        Review.hasOne(models.Resource, {
          foreignKey: 'reviewId',
          as: 'revision',
        });
        Review.hasOne(models.Paper, {
          foreignKey: 'reviewId',
          as: 'paper',
        });
        Review.belongsTo(models.Reviewer, {
          foreignKey: 'reviewerId',
          onDelete: 'CASCADE',
        });
      },
      listByReviewer: (reviewInfo) => {
        const reviewerId = reviewInfo.reviewerId;
        if (!reviewerId) {
          return Promise.reject('Reviewer id not provided');
        }
        return Review.findAll({
          where: {
            reviewerId,
          },
        }).then((reviews) => {
          if (!reviews || reviews.length === 0) {
            return Promise.reject(`No reviews for reviewerId=${reviewerId}`);
          }
          return reviews;
        });
      },
      listByPaper: (models, reviewInfo) => {
        const paperId = reviewInfo.paperId;
        if (!paperId) {
          return Promise.reject('Paper id not provided');
        }
        return Review.findAll({
          attributes: ['id', 'state', 'comment', 'createdAt', 'updatedAt', 'reviewerId'],
          include: [
            {
              model: models.Paper,
              as: 'paper',
              where: { id: paperId },
            }
          ]
        }).then((reviews) => {
          if (!reviews || reviews.length === 0) {
            return Promise.reject(`No reviews for paperId=${paperId}`);
          }
          return reviews;
        });
      },
      detail: (reviewInfo) => {
        const reviewId = reviewInfo.reviewId;
        if (!reviewId) {
          return Promise.reject('Review id not provided');
        }
        return Review.findById(reviewId)
          .then((review) => {
            if (!review) {
              return Promise.reject(`Review with id=${reviewId} does not exist`);
            }
            return review;
          });
      },
    },
  });
  return Review;
};
