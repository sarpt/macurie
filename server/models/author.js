module.exports = (sequelize, DataTypes) => {
  const Author = sequelize.define('Author', {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
    },
  },
  {
    classMethods: {
      associate: (models) => {
        Author.belongsTo(models.User, {
          foreignKey: 'userId',
          onDelete: 'CASCADE',
        });
        Author.hasMany(models.Paper, {
          foreignKey: 'authorId',
          as: 'papers',
        });
      },
    },
  });
  return Author;
};
