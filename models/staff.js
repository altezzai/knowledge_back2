"use strict";
const { DataTypes } = require("sequelize");
const { knowledgeSequelize } = require("../config/connection");

const Staff = knowledgeSequelize.define(
  "Staff",
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
      allowNull: false,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        isEmail: true,
      },
    },
    phone: {
      type: DataTypes.STRING(15),
      allowNull: true,
    },
    role: {
      type: DataTypes.ENUM(
        "Admin Support",
        "Editor",
        "Science Communicator",
        "Proofreader"
      ),
      allowNull: false,
    },

    profile_picture: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    department: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    status: {
      type: DataTypes.STRING,
      allowNull: true,
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
    modelName: "Staff",
    tableName: "Staff",
    timestamps: true, // Automatically manages createdAt and updatedAt
  }
);
module.exports = Staff;
