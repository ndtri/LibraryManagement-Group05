'use strict';
module.exports = (sequelize, DataTypes) => {
  const Type = sequelize.define('Type', {
    typeName: DataTypes.STRING
  }, {});
  Type.associate = function(models) {
    // associations can be defined here
    Type.hasMany(models.Book, {foreignKey: 'typeId'});
  };
  return Type;
};