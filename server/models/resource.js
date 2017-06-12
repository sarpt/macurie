module.exports = (sequelize, DataTypes) => {
  const Resource = sequelize.define('Resource', {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
    },
    filename: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    revisionNumber: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    createdAt: {
      type: DataTypes.DATE,
      allowNull: false,
    },
  },
  {
    classMethods: {
      associate: (models) => {
        Resource.belongsTo(models.Review, {
          foreignKey: 'reviewId',
          onDelete: 'CASCADE',
        });
        Resource.belongsTo(models.Paper, {
          foreignKey: 'paperId',
          onDelete: 'CASCADE',
        });
      },
    },
  });
  return Resource;
};
