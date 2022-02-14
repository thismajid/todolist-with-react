const todoModel = (sequelize, Sequelize) => {
  const Todo = sequelize.define(
    'todo',
    {
      description: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      isCompleted: {
        type: Sequelize.BOOLEAN,
        defaultValue: false,
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
