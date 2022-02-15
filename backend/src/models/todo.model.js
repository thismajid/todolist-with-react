const todoModel = (sequelize, Sequelize) => {
  const Todo = sequelize.define(
    'todo',
    {
      description: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      status: {
        type: Sequelize.ENUM('progress', 'completed'),
        defaultValue: 'progress',
      },
    },
    {
      freezeTableName: true,
      tableName: 'todo',
    }
  );

  return Todo;
};

export default todoModel;
