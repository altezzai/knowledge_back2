const { Sequelize } = require("sequelize");
const Submissions = require("../models/submissions");

const createSubmission = async (req, res) => {
  try {
    console.log({ ...req.body });

    const submissionData = {
      ...req.body,
      file_path: req.files.file ? req.files.file[0].filename : null,
      cover_image: req.files.cover_image
        ? req.files.cover_image[0].filename
        : null,
    };

    const submission = await Submissions.create(submissionData);
    res.status(201).json(submission);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const getSubmissions = async (req, res) => {
  try {
    const page = parseInt(req.query.page) || 1;
    const limit = parseInt(req.query.limit) || 10;
    const offset = (page - 1) * limit;

    const { count, rows: submissions } = await Submissions.findAndCountAll({
      offset,
      limit,
      attributes: {
        include: [
          [
            Sequelize.literal(`(
                SELECT username
                FROM janeway.Users AS users
                WHERE users.id = Submissions.user_id
              )`),
            "username",
          ],
        ],
      },
      order: [["createdAt", "DESC"]],
      // include: User,
    });
    const totalPages = Math.ceil(count / limit);
    // res.status(200).json(submissions);
    res.status(200).json({
      totalcontent: count,
      totalPages,
      currentPage: page,
      submissions,
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = {
  createSubmission,
  getSubmissions,
};
