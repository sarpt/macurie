module.exports = (sequelize, DataTypes) => {
  const EventAdministrator = sequelize.define('EventAdministrator', {
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
        EventAdministrator.belongsTo(models.User, {
          foreignKey: 'userId',
          onDelete: 'CASCADE',
        });
        EventAdministrator.hasMany(models.Conference, {
          foreignKey: 'eventAdminId',
          as: 'conferences',
        });
      },
    },
  });
  return EventAdministrator;
};
