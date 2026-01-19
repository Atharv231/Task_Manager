const { DataTypes } = require("@sequelize/core");
const sequelize = require("../utils/index2");

const Users = sequelize.define(
  "users",
  {
    username: {
      type: DataTypes.STRING,
    },
    password: {
      type: DataTypes.STRING,
    },
  },
  {
    timestamps: false,
  },
);

module.exports = Users;
