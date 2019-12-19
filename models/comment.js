'use strict';
module.exports = (sequelize, DataTypes) => {
  const Comment = sequelize.define('Comment', {
    message: DataTypes.TEXT
  }, {});
  Comment.associate = function(models) {
    // associations can be defined here
    Comment.belongsTo(models.Book, { foreignKey : 'bookId' });
    Comment.belongsTo(models.User, { foreignKey : 'userId' });
  };
  return Comment;
};