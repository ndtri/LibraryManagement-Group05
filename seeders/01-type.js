'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    let data = [
      { typeName : "Lập trình" },
      { typeName : "Tâm lí - Kĩ năng sống" },
      { typeName : "Khoa học - Kĩ thuật" },
      { typeName : "Hồi ký - Tuỳ bút" }
    ];
    data.map(item => {
      item.createdAt = Sequelize.literal('NOW()');
      item.updatedAt = Sequelize.literal('NOW()');
      return item;
    });
      return queryInterface.bulkInsert('Types', data, {});
  },

  down: (queryInterface, Sequelize) => {
     return queryInterface.bulkDelete('Types', null, {});
  }
};
