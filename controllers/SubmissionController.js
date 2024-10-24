const { Sequelize } = require("sequelize");
const Submission = require("../models/submissions");
const Libfeedback = require("../models/libfeedback");
const fs = require("fs");
const path = require("path");

const createSubmission = async (req, res) => {
  try {
    // console.log({ ...req.body });

    const submissionData = {
      ...req.body,
      file_path: req.files.file ? req.files.file[0].filename : null,
      cover_image: req.files.cover_image
        ? req.files.cover_image[0].filename
        : null,
    };

    const submission = await Submission.create(submissionData);
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

    const { count, rows: submissions } = await Submission.findAndCountAll({
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
const getSubmissionById = async (req, res) => {
  try {
    const submission = await Submission.findByPk(req.params.id);
    if (!submission) {
      return res.status(404).json({ error: "Submission not found" });
    }
    res.status(200).json(submission);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const updateSubmissionById = async (req, res) => {
  try {
    const submission = await Submission.findByPk(req.params.id);
    if (!submission) {
      return res.status(404).json({ error: "Submission not found" });
    }

    if (req.files.file && submission.file_path) {
      fs.unlinkSync(path.join("uploads/files/", submission.file_path));
    }
    if (req.files.cover_image && submission.cover_image) {
      fs.unlinkSync(path.join("uploads/cover_images/", submission.cover_image));
    }

    const updatedData = {
      ...req.body,
      file_path: req.files.file
        ? req.files.file[0].filename
        : submission.file_path,
      cover_image: req.files.cover_image
        ? req.files.cover_image[0].filename
        : submission.cover_image,
      updated_at: new Date(),
    };

    await submission.update(updatedData);
    res.status(200).json(submission);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};
const deleteSubmissionById = async (req, res) => {
  try {
    const submission = await Submission.findByPk(req.params.id);
    if (!submission) {
      return res.status(404).json({ error: "Submission not found" });
    }
    submission.trash = true; // Soft delete
    await submission.save();
    res.status(200).send("Successfully trash");
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
const submissionsApprove = async (req, res) => {
  try {
    const submission = await Submission.findByPk(req.params.id);
    if (!submission) {
      return res.status(404).json({ error: "Submission not found" });
    }

    submission.status = "approved";
    await submission.save();

    res.json({ message: "Submission approved successfully", submission });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Reject a submission
const submissionsReject = async (req, res) => {
  try {
    const submission = await Submission.findByPk(req.params.id);
    if (!submission) {
      return res.status(404).json({ error: "Submission not found" });
    }

    submission.status = "rejected";
    await submission.save();

    res.json({ message: "Submission rejected successfully", submission });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};
const createlibfeedback = async (req, res) => {
  try {
    const libfeedbackd = {
      ...req.body,
    };
    console.log(Libfeedback);
    const libfeedback_new = await Libfeedback.create(libfeedbackd); // Use LibrarianFeedback here

    res.status(201).json(libfeedback_new);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Get all feedback entries
const getlibfeedbacks = async (req, res) => {
  try {
    const feedbacks = await Libfeedback.findAll();
    console.log(feedbacks);
    res.json(feedbacks);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Get a single feedback entry by ID
const getlibfeedbackid = async (req, res) => {
  try {
    const feedback = await Libfeedback.findByPk(req.params.id);
    if (feedback) {
      res.json(feedback);
    } else {
      res.status(404).json({ error: "Feedback not found" });
    }
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Update a feedback entry
const updatelibfeedback = async (req, res) => {
  try {
    const feedback = await Libfeedback.findByPk(req.params.id);
    if (!feedback) {
      return res.status(404).json({ error: "Feedback not found" });
    }

    await feedback.update(req.body);
    res.json(feedback);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Delete a feedback entry (soft delete)
const deletelibfeedback = async (req, res) => {
  try {
    const feedback = await Libfeedback.findByPk(req.params.id);
    if (!feedback) {
      return res.status(404).json({ error: "Feedback not found" });
    }

    feedback.trash = true; // Soft delete
    await feedback.save();
    res.json({ message: "Feedback marked as trashed" });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};
const createDepartment = async (req, res) => {
  try {
    const { department_name } = req.body;
    const existingDepartment = await Department.findOne({
      where: { department_name },
    });
    if (existingDepartment) {
      return res.status(400).json({ error: "Department name already exists" });
    }
    const departmentdata = {
      ...req.body,
      icon: req.file ? req.file.filename : null,
    };
    console.log(departmentdata);
    const department = await Department.create(departmentdata);
    res.status(201).json(department);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Get all departments
const getDepartments = async (req, res) => {
  try {
    const departments = await Department.findAll();
    res.status(200).json(departments);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Get a single department by ID
// router.get("/:id", async (req, res) => {
const getDepartmentId = async (req, res) => {
  try {
    const department = await Department.findByPk();
    if (department) {
      res.status(200).json(department);
    } else {
      res.status(404).json({ error: "Department not found" });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Update a department by ID
// router.put("/:id", async (req, res) => {
const updateDepartmentById = async (req, res) => {
  try {
    const { department_name } = req.body;
    const existingDepartment = await Department.findOne({
      where: { department_name },
    });
    if (existingDepartment) {
      return res.status(400).json({ error: "Department name already exists" });
    }

    const department = await Department.findByPk(req.params.id);
    if (req.file && department.icon) {
      fs.unlinkSync(path.join("uploads/department_icons/", department.icon));
    }
    const updatedDepartmentData = {
      ...req.body,
      icon: req.file ? req.file.filename : department.icon,
    };

    await department.update(updatedDepartmentData);
    res.json(department);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Delete a department by ID
// router.delete("/:id", async (req, res) => {
const deleteDepartmentById = async (req, res) => {
  try {
    const deleted = await Department.destroy({
      where: { department_id: req.params.id },
    });
    if (deleted) {
      res.status(200).send({ message: "Department Successfully Deleted" });
    } else {
      res.status(404).json({ error: "Department not found" });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
module.exports = {
  createSubmission,
  getSubmissions,
  getSubmissionById,
  updateSubmissionById,
  deleteSubmissionById,
  submissionsReject,
  submissionsApprove,

  createlibfeedback,
  getlibfeedbacks,
  getlibfeedbackid,
  updatelibfeedback,
  deletelibfeedback,

  createDepartment,
  getDepartments,
  getDepartmentId,
  updateDepartmentById,
  deleteDepartmentById,
};
