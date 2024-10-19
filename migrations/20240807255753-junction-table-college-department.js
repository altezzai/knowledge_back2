"use strict";

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("CollegeDepartments", {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
      },
      collegeId: {
        type: Sequelize.INTEGER,
        references: {
          model: "College",
          key: "id",
        },
        onDelete: "CASCADE",
        onUpdate: "CASCADE",
      },
      departmentId: {
        type: Sequelize.INTEGER,
        references: {
          model: "Department",
          key: "id",
        },
        onDelete: "CASCADE",
        onUpdate: "CASCADE",
      },
      createdAt: {
        type: Sequelize.DATE,
        allowNull: false,
      },
      updatedAt: {
        type: Sequelize.DATE,
        allowNull: false,
      },
    });

    await queryInterface.addConstraint("CollegeDepartments", {
      fields: ["collegeId", "departmentId"],
      name: "unique_collegeDepartments",
      type: "unique",
    });
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.removeConstraint(
      "collegeDepartments",
      "unique_collegeDepartments"
    );
    await queryInterface.dropTable("CollegeDepartments");
  },
};
