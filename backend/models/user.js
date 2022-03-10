const Sequelize = require("sequelize");
const sequelize = require("../config/db");

const User = sequelize.define("User", {
  id: {
    type: Sequelize.UUID,
    defaultValue: Sequelize.UUIDV4,
    primaryKey: true,
  },
  email: Sequelize.STRING,
  password: Sequelize.STRING,
});

module.exports = User;
