const express = require("express");
const router = express.Router();
const publicController = require("../controllers/publicController"); // Adjust the path accordingly

//search
router.get("/searchDepartments/", publicController.searchDepartment);
router.get("/contentsearch/", publicController.contentsearch);
// Route to get departments by college ID
router.get(
  "/college/:collegeId/departments/",
  publicController.getDepartmentsByCollegeId
);
router.get(
  "/search/college/:collegeId/departments/",
  publicController.searchDepartmentsByCollegeId
);
// get department by university id
router.get(
  "/university/:univId/departments/",
  publicController.getDepartmentsByUniversityId
);
router.get(
  "/university/:univId/searchDepartments/",
  publicController.searchDepartmentsByUniversityId
);

router.get(
  "/getcontent/university/:univId/department/:deptId",
  publicController.getcontentUniversityIdDepartementId
);
router.get(
  "/getcontent/university/:univId/college/:clgId/department/:deptId",
  publicController.getcontentUniversityIdCollegeIdDepartementId
);
router.get(
  "/university/:univId/colleges",
  publicController.getCollegesByUniversityId
);
module.exports = router;
