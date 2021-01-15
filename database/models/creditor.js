const Sequelize = require("sequelize");
const db = require("../db");

module.exports = db.define("Creditor", {
  creditorName: {
    type: Sequelize.STRING,
    unique: false,
    allowNull: false,
  },
  firstName: {
    type: Sequelize.STRING,
    unique: false,
    allowNull: false,
  },
  lastName: {
    type: Sequelize.STRING,
    unique: false,
    allowNull: false,
  },
  minPaymentPercentage: {
    type: Sequelize.DECIMAL,
    allowNull: false,
  },
  balance: {
    type: Sequelize.DECIMAL,
    allowNull: false,
  },
});
