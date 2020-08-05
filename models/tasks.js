'use strict';
module.exports = (sequelize, DataTypes) => {
  const tasks = sequelize.define('tasks', {
    task_id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER
    },
    task: {
      type: DataTypes.STRING(45)
    },
  }, {});
  tasks.associate = function(models) {
    // associations can be defined here
  };
  return tasks;
};