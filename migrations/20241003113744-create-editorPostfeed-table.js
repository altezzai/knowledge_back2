"use strict";

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("EditorPostfeed", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      submission_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      assigned_sciencecommunicater: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      assigned_reviewer: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      status: {
        type: Sequelize.ENUM("Pending", "Reviewed", "Approved", "Rejected"),
        allowNull: false,
        defaultValue: "Pending",
      },
      description: {
        type: Sequelize.TEXT,
        allowNull: true,
      },
      file: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      link: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      mentionIds: {
        type: Sequelize.TEXT,
        allowNull: true,
      },
      hashTags: {
        type: Sequelize.TEXT,
        allowNull: true,
      },
      communityIds: {
        type: Sequelize.TEXT,
        allowNull: true,
      },
      trash: {
        type: Sequelize.BOOLEAN,
        defaultValue: false,
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable("EditorPostfeed");
  },
};
