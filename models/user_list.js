'use strict';
module.exports = (sequelize, DataTypes) => {
  const user_list = sequelize.define('user_list', {
    user_id: { 
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true    
    },
    list_id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      allowNull: false
    }
  }, {});
  user_list.associate = function(models) {
    // associations can be defined here
  };
  return user_list;
};