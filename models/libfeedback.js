// models/librarianfeedback.js
const { DataTypes } = require("sequelize");
const { knowledgeSequelize } = require("../config/connection");

const Libfeedback = knowledgeSequelize.define(
  "Libfeedback",
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    submission_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    userid: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    message: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    trash: {
      type: DataTypes.BOOLEAN,
      defaultValue: false,
    },
    createdAt: {
      type: DataTypes.DATE,
      defaultValue: DataTypes.NOW,
    },
    updatedAt: {
      type: DataTypes.DATE,
      defaultValue: DataTypes.NOW,
    },
  },
  {
    modelName: "Libfeedback",
    tableName: "Libfeedbacks",
    timestamps: false, // If you're not using Sequelize's automatic timestamps
  }
);

module.exports = Libfeedback;
