import Sequelize from 'sequelize';
import dbConfig from '../configs/db.config';
import userModel from './user.model';
import todoModel from './todo.model';

const sequelize = new Sequelize(dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD, {
  host: dbConfig.HOST,
  dialect: dbConfig.dialect,

  pool: {
    max: dbConfig.pool.max,
    min: dbConfig.pool.min,
    acquire: dbConfig.pool.acquire,
    idle: dbConfig.pool.idle,
  },
});

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.users = userModel(sequelize, Sequelize);
db.todos = todoModel(sequelize, Sequelize);

// db.users.hasMany(db.todos, { as: 'todos' });
// db.todos.belongsTo(db.users, {
//   foreignKey: 'userId',
//   as: 'user',
// });

export default db;
