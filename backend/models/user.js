const Sequelize = require("sequelize");
const sequelize = require("../config/db");

const User = sequelize.define("User", {
  email: Sequelize.STRING,
  password: Sequelize.STRING,
});

module.exports = User;
