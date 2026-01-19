const { Sequelize } = require("@sequelize/core");
const { PostgresDialect } = require("@sequelize/postgres");

const sequelize = new Sequelize({
  dialect: PostgresDialect,
  url: process.env.DATABASE_URL,
  logging: false,
});

module.exports = sequelize;
