"use strict";
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("Submissions", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      submission_type: {
        type: Sequelize.ENUM(
          "Article",
          "Book",
          "Thesis",
          "Dissertation",
          "Conference Proceedings",
          "Presentation",
          "Question Paper",
          "Other"
        ),
        allowNull: false,
      },
      title: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      authors: {
        type: Sequelize.TEXT,
        allowNull: false,
      },
      abstract: {
        type: Sequelize.TEXT,
      },
      keywords: {
        type: Sequelize.TEXT,
      },
      upload_date: {
        type: Sequelize.DATE,
        defaultValue: Sequelize.NOW,
      },
      journal_name: {
        type: Sequelize.STRING,
      },
      volume_issue_number: {
        type: Sequelize.STRING,
      },
      publication_date: {
        type: Sequelize.DATE,
      },
      doi: {
        type: Sequelize.STRING,
      },
      publisher: {
        type: Sequelize.STRING,
      },
      book_publication_date: {
        type: Sequelize.DATE,
      },
      isbn: {
        type: Sequelize.STRING,
      },
      edition: {
        type: Sequelize.STRING,
      },
      language: {
        type: Sequelize.STRING,
      },
      chapters: {
        type: Sequelize.TEXT,
      },
      degree: {
        type: Sequelize.STRING,
      },
      department: {
        type: Sequelize.STRING,
      },
      university: {
        type: Sequelize.INTEGER,
      },
      institution: {
        type: Sequelize.STRING,
      },
      advisors: {
        type: Sequelize.TEXT,
      },
      defense_date: {
        type: Sequelize.DATE,
      },
      conference_name: {
        type: Sequelize.STRING,
      },
      conference_date: {
        type: Sequelize.DATE,
      },
      conference_location: {
        type: Sequelize.STRING,
      },
      pages: {
        type: Sequelize.STRING,
      },
      presentation_type: {
        type: Sequelize.STRING,
      },
      event_name: {
        type: Sequelize.STRING,
      },
      event_date: {
        type: Sequelize.DATE,
      },
      question_paper_type: {
        type: Sequelize.STRING,
      },
      academic_year: {
        type: Sequelize.STRING,
      },
      course_name: {
        type: Sequelize.STRING,
      },
      semester: {
        type: Sequelize.STRING,
      },
      section: {
        type: Sequelize.STRING,
      },
      subject: {
        type: Sequelize.STRING,
      },
      exam_date: {
        type: Sequelize.DATE,
      },
      file_path: {
        type: Sequelize.STRING,
      },
      cover_image: {
        type: Sequelize.STRING,
      },
      notes: {
        type: Sequelize.TEXT,
      },
      status: {
        type: Sequelize.STRING,
        defaultValue: "pending",
      },
      views: {
        type: Sequelize.INTEGER,
      },
      downloads: {
        type: Sequelize.INTEGER,
      },

      user_id: {
        type: Sequelize.INTEGER,
      },
      url: {
        type: Sequelize.STRING,
      },
      reviewer_name: {
        type: Sequelize.STRING,
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
    await queryInterface.sequelize.query(`
      ALTER TABLE knowledge.Submissions
      ADD CONSTRAINT fk_Submissions_user_id
      FOREIGN KEY (user_id)
      REFERENCES janeway.Users(id)
      ON DELETE CASCADE
      ON UPDATE CASCADE;
    `);
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.sequelize.query(`
      ALTER TABLE knowledge.Submissions
      DROP FOREIGN KEY fk_Submissions_user_id;
    `);
    await queryInterface.dropTable("Submissions");
  },
};
