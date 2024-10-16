"use strict";
const { DataTypes } = require("sequelize");

const { knowledgeSequelize } = require("../config/connection");

const Submissions = knowledgeSequelize.define(
  "Submissions",
  {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER,
    },
    submission_type: {
      type: DataTypes.ENUM(
        "Article",
        "Book",
        "Thesis",
        "Dissertation",
        "Conference Proceedings",
        "Presentation",
        "Question Paper",
        "Other"
      ),
      allowNull: true,
    },
    title: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    authors: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
    abstract: {
      type: DataTypes.TEXT,
    },
    keywords: {
      type: DataTypes.TEXT,
    },
    upload_date: {
      type: DataTypes.DATE,
      defaultValue: DataTypes.NOW,
    },
    journal_name: {
      type: DataTypes.STRING,
    },
    volume_issue_number: {
      type: DataTypes.STRING,
    },
    publication_date: {
      type: DataTypes.DATE,
    },
    doi: {
      type: DataTypes.STRING,
    },
    publisher: {
      type: DataTypes.STRING,
    },
    book_publication_date: {
      type: DataTypes.DATE,
    },
    isbn: {
      type: DataTypes.STRING,
    },
    edition: {
      type: DataTypes.STRING,
    },
    language: {
      type: DataTypes.STRING,
    },
    chapters: {
      type: DataTypes.TEXT,
    },
    degree: {
      type: DataTypes.STRING,
    },
    department: {
      type: DataTypes.STRING,
    },
    university: {
      type: DataTypes.INTEGER,
    },
    institution: {
      type: DataTypes.STRING,
    },
    advisors: {
      type: DataTypes.TEXT,
    },
    defense_date: {
      type: DataTypes.DATE,
    },
    conference_name: {
      type: DataTypes.STRING,
    },
    conference_date: {
      type: DataTypes.DATE,
    },
    conference_location: {
      type: DataTypes.STRING,
    },
    pages: {
      type: DataTypes.STRING,
    },
    presentation_type: {
      type: DataTypes.STRING,
    },
    event_name: {
      type: DataTypes.STRING,
    },
    event_date: {
      type: DataTypes.DATE,
    },
    question_paper_type: {
      type: DataTypes.STRING,
    },
    academic_year: {
      type: DataTypes.STRING,
    },
    course_name: {
      type: DataTypes.STRING,
    },
    semester: {
      type: DataTypes.STRING,
    },
    section: {
      type: DataTypes.STRING,
    },
    subject: {
      type: DataTypes.STRING,
    },
    exam_date: {
      type: DataTypes.DATE,
    },
    file_path: {
      type: DataTypes.STRING,
    },
    cover_image: {
      type: DataTypes.STRING,
    },
    notes: {
      type: DataTypes.TEXT,
    },
    status: {
      type: DataTypes.STRING,
      defaultValue: "pending",
    },
    views: {
      type: DataTypes.INTEGER,
    },
    downloads: {
      type: DataTypes.INTEGER,
    },

    user_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: {
          tableName: "Users",
          schema: "janeway",
        },
        key: "id",
      },
      onUpdate: "CASCADE",
      onDelete: "CASCADE",
    },
    url: {
      type: DataTypes.STRING,
    },
    reviewer_name: {
      type: DataTypes.STRING,
    },
    trash: {
      type: DataTypes.BOOLEAN,
      defaultValue: false,
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
    modelName: "Submissions",
    timestamps: true,
  }
);

module.exports = Submissions;
