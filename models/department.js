"use strict";

const { DataTypes } = require("sequelize");
const { knowledgeSequelize } = require("../config/connection");

const Department = knowledgeSequelize.define(
  "Department",
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
      allowNull: false,
    },
    department_name: {
      type: DataTypes.STRING(255),
      allowNull: false,
    },
    icon: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    description: {
      type: DataTypes.TEXT,
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
    tableName: "department",
    timestamps: true, // If your table has timestamps columns, set this to true and remove last_updated from the model
  }
);
Department.associate = (models) => {
  Department.belongsToMany(models.College, {
    through: "CollegeDepartment",
    foreignKey: "departmentId",
    otherKey: "collegeId",
  });
};
module.exports = Department;
