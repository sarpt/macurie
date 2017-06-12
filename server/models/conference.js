module.exports = (sequelize, DataTypes) => {
  const Conference = sequelize.define('Conference', {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    description: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    date: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    ticketFee: {
      type: DataTypes.DECIMAL,
      allowNull: false,
    },
    state: {
      type: DataTypes.ENUM('unregistered', 'registered'),
      allowNull: false,
    },
    domain: {
      type: DataTypes.ENUM('scientific', 'business', 'corporate'),
      allowNull: false,
    },
  },
  {
    classMethods: {
      associate: (models) => {
        Conference.belongsTo(models.EventAdministrator, {
          foreignKey: 'eventAdminId',
          onDelete: 'CASCADE',
        });
      },
    },
  });
  return Conference;
};
