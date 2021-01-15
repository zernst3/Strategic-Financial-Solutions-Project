const Sequelize = require("sequelize");

const databaseName = "SFS";

console.log("Connecting to the database");

const db = new Sequelize(`postgres://localhost:5432/${databaseName}`, {
  logging: false,
  ssl: {
    rejectUnauthorized: false,
  },
});

module.exports = db;
