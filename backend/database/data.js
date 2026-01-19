const { DataTypes } = require("sequelize");
const sequelize = require("../utils/index");

const Task = sequelize.define(
  "Task",
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },

    title: {
      type: DataTypes.STRING(200),
      allowNull: false,
    },

    description: {
      type: DataTypes.TEXT,
    },
  },
  {
    timestamps: false,
  },
);

module.exports = Task;
