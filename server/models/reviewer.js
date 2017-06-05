module.exports = (sequelize, DataTypes) => {
  const Reviewer = sequelize.define('Reviewer', {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      autoIncrement: true,
      primaryKey: true
    }
  }, 
  {
    classMethods: {
      associate: (models) => {
        Reviewer.belongsTo(models.User, {
          foreignKey: 'userId',
          onDelete: 'CASCADE'
        });
        Reviewer.hasMany(models.Review, {
          foreignKey: 'reviewerId',
          as: 'reviews'
        });
      }
    }
  });
  return Reviewer;
};