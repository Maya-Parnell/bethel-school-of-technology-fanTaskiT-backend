'use strict';
module.exports = (sequelize, DataTypes) => {
  const list_task = sequelize.define('list_task', {
    list_id: {
      type: DataTypes.INTEGER,
      primaryKey: true, 
      allowNull: false
    },
    task_id: {
      type: DataTypes.INTEGER,
      primaryKey: true, 
      allowNull: false
    }
  }, {});
  list_task.associate = function(models) {
    // associations can be defined here
  };
  return list_task;
};