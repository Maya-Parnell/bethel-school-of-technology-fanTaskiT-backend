'use strict';
module.exports = (sequelize, DataTypes) => {
  const lists = sequelize.define('lists', {
    list_id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
      allowNull: false
    },
    list_title: {
      type: DataTypes.STRING(24),
      allowNull: true 
    },
    list_description: {
      type: DataTypes.STRING(60),
      allowNull: true
    }
  }, {});
  lists.associate = function(models) {
    // associations can be defined here
  };
  return lists;
};