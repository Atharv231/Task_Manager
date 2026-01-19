// const { Sequelize } = require("@sequelize/core");
// const { PostgresDialect } = require("@sequelize/postgres");

const { Sequelize } = require("sequelize");

const sequelize = new Sequelize(process.env.DATABASE_URL, {
  dialect: "postgres",
  protocol: "postgres",
  logging: false,
  dialectOptions: {
    ssl: {
      require: true,
      rejectUnauthorized: false,
    },
  },
});

module.exports = sequelize;

//For Local Database Connection

// import { Sequelize } from "@sequelize/core";
// import { PostgresDialect } from "@sequelize/postgres";

// const sequelize2 = new Sequelize({
//   dialect: PostgresDialect,
//   database: "Admin-Panel",
//   user: "postgres",
//   password: "12345",
//   host: "localhost",
//   port: 5432,
//   clientMinMessages: "notice",
// });

// export default sequelize2;
