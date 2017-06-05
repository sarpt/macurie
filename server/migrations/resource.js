module.exports = {
  up: (queryInterface, Sequelize) =>
    queryInterface.createTable('Resources', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      filename: {
        type: Sequelize.STRING,
        allowNull: false
      },
      revisionNumber: {
        type: Sequelize.INTEGER,
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
      paperId: {
        type: Sequelize.INTEGER,
        onDelete: 'CASCADE',
        references: {
          model: 'Papers',
          key: 'id',
          as: 'paperId',
        }
      }  
    }),
  down: (queryInterface /* , Sequelize */) => queryInterface.dropTable('Resources')
};