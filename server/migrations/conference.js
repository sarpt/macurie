module.exports = {
  up: (queryInterface, Sequelize) =>
    queryInterface.createTable('Conferences', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      name: {
        type: Sequelize.STRING,
        allowNull: false
      },
      description: {
        type: Sequelize.STRING,
        allowNull: false
      },
      date: {
        type: Sequelize.DATE,
        allowNull: false
      },
      ticketFee: {
        type: Sequelize.DECIMAL, 
        allowNull: false
      },
      state: {
        type: Sequelize.ENUM('unregistered', 'registered'),
        allowNull: false
      },
      domain: {
        type: Sequelize.ENUM('scientific', 'business', 'corporate'),
        allowNull: false
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      eventAdminId: {
        type: Sequelize.INTEGER,
        onDelete: 'CASCADE',
        references: {
          model: 'EventAdministrators',
          key: 'id',
          as: 'eventAdminId',
        }
      }  
    }),
  down: (queryInterface /* , Sequelize */) => queryInterface.dropTable('Conferences')
};