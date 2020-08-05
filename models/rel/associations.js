module.exports = function(models) {
    models.users.belongsToMany(models.lists, 
    {
        through: models.user_list, 
        foreignKey: 'user_id'
    });

    models.lists.belongsTo(models.users, 
    {
        through: models.user_list, 
        foreignKey: 'list_id'
    });

    models.lists.belongsToMany(models.tasks, 
    {
        through: models.list_task, 
        foreignKey: 'list_id'
    });

    models.tasks.belongsTo(models.lists, 
    {
        through: models.list_task, 
        foreignKey: 'task_id'
    })
}