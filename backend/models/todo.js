const Sequelize = require("sequelize");
const sequelize = require("../config/db");

const Todo = sequelize.define("Todos", {
  name: Sequelize.STRING,
});

module.exports = Todo;
