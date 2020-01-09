'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('RequestBooks', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      pendingDate: {
        type: Sequelize.STRING
      },
      status: {
        type: Sequelize.STRING
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      userId: {
        type: Sequelize.INTEGER,
        references: {
          model: 'Users',
          key: 'id'
        },
        onDelete: 'cascade',
        onUpdate: 'cascade'
      },
      bookId: {
        type: Sequelize.INTEGER,
        references: {
          model: 'Books',
          key: 'id'
        },
        onDelete: 'cascade',
        onUpdate: 'cascade'
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('RequestBooks');
  }
};