const express = require("express");
const router = express.Router();
const multer = require("multer");
const path = require("path");
const adminController = require("../controllers/adminController");

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "uploads/college_logos/");
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + "-" + file.originalname);
  },
});
const upload = multer({ storage: storage });

const depstorage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "uploads/department_icons/");
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + "-" + file.originalname);
  },
});

const depUpload = multer({ storage: depstorage });

const unistorage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "uploads/university_logos/");
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + "-" + file.originalname);
  },
});
const uniupload = multer({ storage: unistorage });

const stfstorage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "uploads/staff_photo/");
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + "-" + file.originalname);
  },
});
const stfupload = multer({ storage: stfstorage });

const efstorage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "uploads/feed_file/");
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + "-" + file.originalname);
  },
});
const efupload = multer({ storage: efstorage });
//Manage college
router.post("/College/", upload.single("logo"), adminController.createCollege);
router.get("/College/", adminController.getColleges);
router.get("/College/:id", adminController.getCollegeId);
router.put(
  "/College/:id",
  upload.single("logo"),
  adminController.updateCollegeById
);
router.delete("/College/:id", adminController.deleteCollegeById);

// Manage Department
router.post(
  "/Department/",
  depUpload.single("icon"),
  adminController.createDepartment
);
router.get("/Department/", adminController.getDepartments);
router.get("/Department/:id", adminController.getDepartmentId);
router.put(
  "/Department/:id",
  depUpload.single("icon"),
  adminController.updateDepartmentById
);
router.delete("/Department/:id", adminController.deleteDepartmentById);
//search
// router.post("/search/", adminController.search);

//Manage university
router.post(
  "/University/",
  uniupload.single("logo"),
  adminController.createUniversity
);
router.get("/University/", adminController.getUniversities);
router.get("/University/:id", adminController.getUniversityId);
router.put(
  "/University/:id",
  uniupload.single("logo"),
  adminController.updateUniversityById
);
router.delete("/University/:id", adminController.deleteUniversityById);

//manage Staff
router.post(
  "/Staff/",
  stfupload.single("profile_picture"),
  adminController.createStaff
);

router.get("/Staff/", adminController.getStaffs);
router.get("/Staff/:id", adminController.getStaffId);
router.put(
  "/Staff/:id",
  stfupload.single("profile_picture"),
  adminController.updateStaff
);
router.delete("/Staff/:id", adminController.deleteStaff);

//manage EditorPostFeed
router.post(
  "/editorPostfeed/",
  efupload.single("file"),
  adminController.createEfeed
);

router.get("/editorPostfeed/", adminController.getEfeed);
router.get("/editorPostfeed/:id", adminController.getEfeedbyid);
router.put(
  "/editorPostfeed/:id",
  efupload.single("file"),
  adminController.updateEfeed
);
router.delete("/editorPostfeed/:id", adminController.deleteEfeed);

//manage Feedback from Editorial bord
router.post("/feedback/", adminController.createfeedback);
// // Get all feedback
router.get("/feedback/", adminController.getfeedbacks);
// Get feedback by ID
router.get("/feedback/:id", adminController.getfeedbackid);
// Update feedback
router.put("/feedback/:id", adminController.updatefeedback);
// Delete feedback
router.delete("/feedback/:id", adminController.deletefeedback);

module.exports = router;
