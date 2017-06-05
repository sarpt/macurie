module.exports = (sequelize, DataTypes) => {
  const Paper = sequelize.define('Paper', {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      autoIncrement: true,
      primaryKey: true
    },
    title: {
      type: DataTypes.STRING,
      allowNull: false
    },
    subject: {
      type: DataTypes.STRING,
      allowNull: false
    },
    summary: {
      type: DataTypes.STRING,
      allowNull: false
    }
  }, 
  {
    classMethods: {
      associate: (models) => {
        Paper.belongsTo(models.Author, {
          foreignKey: 'authorId',
          onDelete: 'CASCADE'
        });
        Paper.hasMany(models.Resource, {
          foreignKey: 'paperId',
          as: 'revisions'
        });
      }
    }
  });
  return Paper;
};