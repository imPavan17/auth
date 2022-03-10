const Sequelize = require("sequelize");

const sequelize = new Sequelize("test2", "root", "root@12345", {
  dialect: "mysql",
  host: "localhost",
});

module.exports = sequelize;
