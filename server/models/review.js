module.exports = (sequelize, DataTypes) => {
  const Review = sequelize.define('Review', {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      autoIncrement: true,
      primaryKey: true
    },
    state: {
      type: DataTypes.ENUM('accepted', 'rejected'),
      allowNull: false
    },
    comment: {
      type: DataTypes.STRING,
      allowNull: false
    },
  }, 
  {
    classMethods: {
      associate: (models) => {
        Review.hasOne(models.Resource, {
          foreignKey: 'reviewId',
          as: 'revision'
        });
        Review.hasOne(models.Paper, {
          foreignKey: 'reviewId',
          as: 'paper'
        });      
        Review.belongsTo(models.Reviewer, {
          foreignKey: 'reviewerId',
          onDelete: 'CASCADE'
        });
      }
    }
  });
  return Review;
};
