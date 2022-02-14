const todoModel = (sequelize, Sequelize) => {
  const Todo = sequelize.define(
    'todo',
    {
      description: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      status: {
        type: Sequelize.ENUM('inprogress', 'completed'),
        defaultValue: 'inprogress',
      },
    },
    {
      freezeTableName: true,
      tableName: 'todo',
    }
  );

  Todo.associate = (models) => {
    Todo.belongsTo(models.User, {
      foreignKey: 'userId',
    });
  };

  return Todo;
};

export default todoModel;
