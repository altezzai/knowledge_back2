"use strict";
const { DataTypes } = require("sequelize");
const { janewaySequelize } = require("../config/connection");

const User = janewaySequelize.define(
  "User",
  {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER,
    },
    username: {
      type: DataTypes.STRING(20),
      allowNull: false,
      unique: true,
    },
    // first_name: {
    //   type: DataTypes.STRING,
    //   allowNull: true,
    // },
    // middle_name: {
    //   type: DataTypes.STRING,
    //   allowNull: true,
    // },
    // last_name: {
    //   type: DataTypes.STRING,
    //   allowNull: true,
    // },
    // email: {
    //   type: DataTypes.STRING(50),
    //   allowNull: false,
    // },
    // biography: {
    //   type: DataTypes.TEXT,
    //   allowNull: true,
    // },
    // twitter: {
    //   type: DataTypes.STRING,
    //   allowNull: true,
    // },
    // linkedin: {
    //   type: DataTypes.STRING,
    //   allowNull: true,
    // },
    // facebook: {
    //   type: DataTypes.STRING,
    //   allowNull: true,
    // },
    // website: {
    //   type: DataTypes.STRING,
    //   allowNull: true,
    // },
    // github: {
    //   type: DataTypes.STRING,
    //   allowNull: true,
    // },
    // password: {
    //   type: DataTypes.STRING(20),
    //   allowNull: false,
    // },
    // profile_image: {
    //   type: DataTypes.STRING,
    // },
    // isAuthor: {
    //   type: DataTypes.BOOLEAN,
    //   allowNull: false,
    //   defaultValue: false,
    // },
    // isActive: {
    //   type: DataTypes.BOOLEAN,
    //   allowNull: false,
    //   defaultValue: true,
    // },
    // citizenActive: {
    //   type: DataTypes.BOOLEAN,
    //   allowNull: false,
    //   defaultValue: true,
    // },
    // citizenDeactivatedAt: {
    //   type: DataTypes.DATE,
    //   allowNull: true,
    // },
    // isBanned: {
    //   type: DataTypes.BOOLEAN,
    //   allowNull: false,
    //   defaultValue: false,
    // },
    // BannedAt: {
    //   type: DataTypes.DATE,
    //   allowNull: true,
    // },
    // ban_duration: {
    //   type: DataTypes.INTEGER,
    //   allowNull: true,
    // },
  },
  {
    modelName: "User",
    timestamps: false,
  }
);

module.exports = User;
