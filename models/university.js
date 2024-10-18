"use strict";

const { DataTypes } = require("sequelize");
const { knowledgeSequelize } = require("../config/connection");

const University = knowledgeSequelize.define(
  "University",
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    location: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    established_year: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    type: {
      type: DataTypes.ENUM("Public", "Private", "Others"),
      allowNull: false,
    },
    contact_phone: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    contact_email: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    contact_website: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    number_of_students: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    number_of_faculties: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    affiliations: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
    ranking: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    courses_offered: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
    description: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
    campus_size: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    logo: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    createdAt: {
      allowNull: false,
      type: DataTypes.DATE,
    },
    updatedAt: {
      allowNull: false,
      type: DataTypes.DATE,
    },
  },
  {
    modelName: "University",
    tableName: "University",
    timestamps: true,
  }
);
module.exports = University;
