const userModel = (sequelize, Sequelize) => {
  const User = sequelize.define("user", {
    firstname: {
      type: Sequelize.STRING
    },
    lastname: {
      type: Sequelize.STRING
    }
  });

  return User;
};

export default userModel;