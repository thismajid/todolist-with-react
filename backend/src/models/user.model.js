import bcrypt from 'bcrypt';

const userModel = (sequelize, Sequelize) => {
  const User = sequelize.define(
    'user',
    {
      firstname: {
        type: Sequelize.STRING,
        allowNull: false,
        validate: {
          len: [2, 20],
        },
      },
      lastname: {
        type: Sequelize.STRING,
        allowNull: false,
        validate: {
          len: [2, 20],
        },
      },
      email: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true,
        validate: {
          isEmail: true,
        },
      },
      username: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true,
        validate: {
          len: [4, 20],
        },
      },
      password: {
        type: Sequelize.STRING,
        allowNull: false,
        validate: {
          is: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{6,}$/,
        },
      },
    },
    {
      freezeTableName: true,
      tableName: 'user',
    }
  );

  const encryptPassword = async (user) => {
    if (user.changed('password')) {
      user.password = await bcrypt.hash(user.password, 10);
    }
  };

  User.beforeCreate(encryptPassword);
  User.beforeUpdate(encryptPassword);

  User.authenticate = async function (username, password) {
    const user = await User.findOne({ where: { username } });

    if (bcrypt.compareSync(password, user.password)) {
      return true;
    }

    return false;
  };

  User.associate = (models) => {
    User.hasMany(models.Todo, {
      foreignKey: 'todoIds',
    });
  };

  return User;
};

export default userModel;
