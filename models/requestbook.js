'use strict';
module.exports = (sequelize, DataTypes) => {
  const RequestBook = sequelize.define('RequestBook', {
    pendingDate: DataTypes.STRING,
    status: DataTypes.STRING
  }, {});
  RequestBook.associate = function(models) {
    RequestBook.belongsTo(models.User, { foreignKey : 'userId'});
    RequestBook.belongsTo(models.Book, { foreignKey : 'bookId'});
  };
  return RequestBook;
};