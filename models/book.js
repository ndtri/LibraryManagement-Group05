'use strict';
module.exports = (sequelize, DataTypes) => {
  const Book = sequelize.define('Book', {
    title: DataTypes.STRING,
    availability: DataTypes.STRING,
    author: DataTypes.STRING,
    rating: DataTypes.INTEGER,
    content: DataTypes.TEXT,
    quantity: DataTypes.INTEGER
  }, {});
  Book.associate = function(models) {
    // associations can be defined here
    Book.belongsTo(models.Type, { foreignKey : 'typeId'});
    Book.hasMany(models.Comment, { foreignKey : 'bookId'});
  };
  return Book;
};