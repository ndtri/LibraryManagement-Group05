'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    let data = [
      {
        status : "Waiting",
        pendingDate : "15/10/2020",
        userId : 1,
        bookId : 1
      }
    ];
    data.map(item => {
      item.createdAt = Sequelize.literal('NOW()');
      item.updatedAt = Sequelize.literal('NOW()');
      return item;
    });
    return queryInterface.bulkInsert('RequestBooks', data, {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('RequestBooks', null, {});
  }
};
