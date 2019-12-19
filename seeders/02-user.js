'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    let data = [
      {username : "1753020", password : "user", isAdmin : "false" }
    ];
    data.map(item => {
      item.createdAt = Sequelize.literal('NOW()');
      item.updatedAt = Sequelize.literal('NOW()');
      return item;
    });
    return queryInterface.bulkInsert('Users', data, {});
  },

  down: (queryInterface, Sequelize) => {
      return queryInterface.bulkDelete('Users', null, {});
  }
};
