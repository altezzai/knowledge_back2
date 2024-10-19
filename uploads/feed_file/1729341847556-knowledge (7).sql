-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Oct 19, 2024 at 12:34 PM
-- Server version: 10.4.32-MariaDB
-- PHP Version: 8.1.25

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `knowledge`
--

-- --------------------------------------------------------

--
-- Table structure for table `college`
--

CREATE TABLE `college` (
  `id` int(11) NOT NULL,
  `university_id` int(11) DEFAULT NULL,
  `college_name` varchar(255) NOT NULL,
  `address` text NOT NULL,
  `city` varchar(255) DEFAULT NULL,
  `state` varchar(255) DEFAULT NULL,
  `country` varchar(255) DEFAULT NULL,
  `postal_code` varchar(255) DEFAULT NULL,
  `contact_phone` varchar(255) DEFAULT NULL,
  `contact_email` varchar(255) DEFAULT NULL,
  `principal` varchar(255) DEFAULT NULL,
  `librarian_name` varchar(255) DEFAULT NULL,
  `librarian_email` varchar(255) DEFAULT NULL,
  `number_of_departments` int(11) DEFAULT NULL,
  `number_of_faculties` int(11) DEFAULT NULL,
  `number_of_students` int(11) DEFAULT NULL,
  `established_year` int(11) DEFAULT NULL,
  `website` varchar(255) DEFAULT NULL,
  `description` text DEFAULT NULL,
  `logo` varchar(255) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  `trash` tinyint(1) DEFAULT 0
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `college`
--

INSERT INTO `college` (`id`, `university_id`, `college_name`, `address`, `city`, `state`, `country`, `postal_code`, `contact_phone`, `contact_email`, `principal`, `librarian_name`, `librarian_email`, `number_of_departments`, `number_of_faculties`, `number_of_students`, `established_year`, `website`, `description`, `logo`, `createdAt`, `updatedAt`, `trash`) VALUES
(1, 1, 'dff college', '123 Sample Street', 'Sample City', 'Sample state', 'Sample Country', '653245', '1234567802', 'W@b.com', 'dr.ramakrishnan', 'raman', 'raman@h.vom', 5, 25, 250, 2012, 'tesr.com', 'This is a sample college.', NULL, '2024-10-18 10:01:59', '2024-10-18 10:01:59', 0),
(2, 1, 'dff college', '123 Sample Street', 'Sample City', 'Sample state', 'Sample Country', '653245', '1234567802', 'W@b.com', 'dr.ramakrishnan', 'raman', 'raman@h.vom', 5, 25, 250, 2012, 'tesr.com', 'This is a sample college.', NULL, '2024-10-18 10:02:47', '2024-10-18 10:02:47', 0),
(3, 1, 'dff college', '123 Sample Street', 'Sample City', 'Sample state', 'Sample Country', '653245', '1234567802', 'W@b.com', 'dr.ramakrishnan', 'raman', 'raman@h.vom', 5, 25, 250, 2012, 'tesr.com', 'This is a sample college.', NULL, '2024-10-18 10:03:09', '2024-10-18 10:03:09', 0),
(4, 1, 'dff college', '123 Sample Street', 'Sample City', 'Sample state', 'Sample Country', '653245', '1234567802', 'W@b.com', 'dr.ramakrishnan', 'raman', 'raman@h.vom', 5, 25, 250, 2012, 'tesr.com', 'This is a sample college.', NULL, '2024-10-18 10:03:42', '2024-10-18 10:03:42', 0);

-- --------------------------------------------------------

--
-- Table structure for table `collegedepartment`
--

CREATE TABLE `collegedepartment` (
  `id` int(11) NOT NULL,
  `collegeId` int(11) DEFAULT NULL,
  `departmentId` int(11) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `collegedepartments`
--

CREATE TABLE `collegedepartments` (
  `id` int(11) NOT NULL,
  `collegeId` int(11) NOT NULL,
  `departmentId` int(11) NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `collegedepartments`
--

INSERT INTO `collegedepartments` (`id`, `collegeId`, `departmentId`, `createdAt`, `updatedAt`) VALUES
(7, 4, 1, '2024-10-18 10:03:42', '2024-10-18 10:03:42'),
(8, 4, 2, '2024-10-18 10:03:42', '2024-10-18 10:03:42');

-- --------------------------------------------------------

--
-- Table structure for table `department`
--

CREATE TABLE `department` (
  `id` int(11) NOT NULL,
  `icon` varchar(255) DEFAULT NULL,
  `department_name` varchar(255) NOT NULL,
  `description` text DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `department`
--

INSERT INTO `department` (`id`, `icon`, `department_name`, `description`, `createdAt`, `updatedAt`) VALUES
(1, NULL, 'Department of physics', 'this is small department', '2024-10-18 09:26:50', '2024-10-18 09:26:50'),
(2, NULL, 'Department of chemistry', 'this is small department', '2024-10-18 09:27:04', '2024-10-18 09:27:04');

-- --------------------------------------------------------

--
-- Table structure for table `editorpostfeed`
--

CREATE TABLE `editorpostfeed` (
  `id` int(11) NOT NULL,
  `submission_id` int(11) NOT NULL,
  `assigned_sciencecommunicater` int(11) NOT NULL,
  `assigned_reviewer` int(11) NOT NULL,
  `status` enum('Pending','Reviewed','Approved','Rejected') NOT NULL DEFAULT 'Pending',
  `description` text DEFAULT NULL,
  `file` varchar(255) DEFAULT NULL,
  `link` varchar(255) DEFAULT NULL,
  `mentionIds` text DEFAULT NULL,
  `hashTags` text DEFAULT NULL,
  `communityIds` text DEFAULT NULL,
  `trash` tinyint(1) DEFAULT 0,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `editorpostfeed`
--

INSERT INTO `editorpostfeed` (`id`, `submission_id`, `assigned_sciencecommunicater`, `assigned_reviewer`, `status`, `description`, `file`, `link`, `mentionIds`, `hashTags`, `communityIds`, `trash`, `createdAt`, `updatedAt`) VALUES
(1, 1, 2, 1, 'Pending', '  Lorem ipsum dolor sit amet, at dicta ignota per. Oblique imperdiet vis et, cu sea idque eripuit complectitur. Cu eam graeci pericula expetenda, an ferri reque rationibus vix. Pro elitr comprehensam at, et quot ullum usu.\n\nSoluta causae invidunt ut sit, epicuri tractatos maluisset ut vim. Nec mucius nostrud maluisset ne. Id noster eripuit qui. Quo noluisse lobortis an, cum legendos adipiscing at. Dico eloquentiam sea ea, per eu quando corpora', NULL, ' https://example.com/submission-link', '[1,3]', '[\"trending\",\"2024\"]', NULL, 0, '2024-10-18 10:14:33', '2024-10-18 10:14:33');

-- --------------------------------------------------------

--
-- Table structure for table `feedback`
--

CREATE TABLE `feedback` (
  `id` int(11) NOT NULL,
  `submission_id` int(11) NOT NULL,
  `userid` int(11) NOT NULL,
  `message` text NOT NULL,
  `trash` tinyint(1) DEFAULT 0,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `feedback`
--

INSERT INTO `feedback` (`id`, `submission_id`, `userid`, `message`, `trash`, `createdAt`, `updatedAt`) VALUES
(1, 1, 11, ' Great work on the submission!.', 0, '2024-10-18 10:15:54', '2024-10-18 10:15:54'),
(2, 1, 11, ' Great work on the submission!.', 0, '2024-10-18 10:15:56', '2024-10-18 10:15:56');

-- --------------------------------------------------------

--
-- Table structure for table `libfeedback`
--

CREATE TABLE `libfeedback` (
  `id` int(11) NOT NULL,
  `submission_id` int(11) NOT NULL,
  `userid` int(11) NOT NULL,
  `message` text NOT NULL,
  `trash` tinyint(1) DEFAULT 0,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `libfeedback`
--

INSERT INTO `libfeedback` (`id`, `submission_id`, `userid`, `message`, `trash`, `createdAt`, `updatedAt`) VALUES
(1, 3, 1, ' Great work  good', 0, '2024-10-18 09:27:27', '2024-10-18 09:27:27'),
(2, 1, 1, ' Great work  good', 0, '2024-10-18 09:27:33', '2024-10-18 09:27:33');

-- --------------------------------------------------------

--
-- Table structure for table `sequelizemeta`
--

CREATE TABLE `sequelizemeta` (
  `name` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Dumping data for table `sequelizemeta`
--

INSERT INTO `sequelizemeta` (`name`) VALUES
('20240103134056-create-lib-feedback.js'),
('20240701092109-create-submissions.js'),
('20240730095050-create-department.js'),
('20240801073922-create-university-table.js'),
('20240806063140-junction-table-university-department.js'),
('20240807131155-create-college.js'),
('20240807255753-junction-table-college-department.js'),
('20241002091220-create-staff.js'),
('20241003113744-create-editorPostfeed-table.js'),
('20241003134056-create-feedback.js');

-- --------------------------------------------------------

--
-- Table structure for table `staff`
--

CREATE TABLE `staff` (
  `id` int(11) NOT NULL,
  `name` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `phone` varchar(15) DEFAULT NULL,
  `role` enum('Admin Support','Editor','Science Communicator','Proofreader') NOT NULL,
  `profile_picture` varchar(255) DEFAULT NULL,
  `department` varchar(255) DEFAULT NULL,
  `status` varchar(255) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `staff`
--

INSERT INTO `staff` (`id`, `name`, `email`, `phone`, `role`, `profile_picture`, `department`, `status`, `createdAt`, `updatedAt`) VALUES
(1, 'abijith', 'abijith@example.com', ' 1234567890', 'Editor', NULL, 'science Department', NULL, '2024-10-18 10:12:36', '2024-10-18 10:12:36'),
(2, 'abijith', 'abiji@example.com', ' 1234567890', 'Editor', NULL, 'science Department', NULL, '2024-10-18 10:12:45', '2024-10-18 10:12:45');

-- --------------------------------------------------------

--
-- Table structure for table `submissions`
--

CREATE TABLE `submissions` (
  `id` int(11) NOT NULL,
  `submission_type` enum('Article','Book','Thesis','Dissertation','Conference Proceedings','Presentation','Question Paper','Other') NOT NULL,
  `title` varchar(255) NOT NULL,
  `authors` text NOT NULL,
  `abstract` text DEFAULT NULL,
  `keywords` text DEFAULT NULL,
  `upload_date` datetime DEFAULT NULL,
  `journal_name` varchar(255) DEFAULT NULL,
  `volume_issue_number` varchar(255) DEFAULT NULL,
  `publication_date` datetime DEFAULT NULL,
  `doi` varchar(255) DEFAULT NULL,
  `publisher` varchar(255) DEFAULT NULL,
  `book_publication_date` datetime DEFAULT NULL,
  `isbn` varchar(255) DEFAULT NULL,
  `edition` varchar(255) DEFAULT NULL,
  `language` varchar(255) DEFAULT NULL,
  `chapters` text DEFAULT NULL,
  `degree` varchar(255) DEFAULT NULL,
  `department` varchar(255) DEFAULT NULL,
  `university` int(11) DEFAULT NULL,
  `institution` varchar(255) DEFAULT NULL,
  `advisors` text DEFAULT NULL,
  `defense_date` datetime DEFAULT NULL,
  `conference_name` varchar(255) DEFAULT NULL,
  `conference_date` datetime DEFAULT NULL,
  `conference_location` varchar(255) DEFAULT NULL,
  `pages` varchar(255) DEFAULT NULL,
  `presentation_type` varchar(255) DEFAULT NULL,
  `event_name` varchar(255) DEFAULT NULL,
  `event_date` datetime DEFAULT NULL,
  `question_paper_type` varchar(255) DEFAULT NULL,
  `academic_year` varchar(255) DEFAULT NULL,
  `course_name` varchar(255) DEFAULT NULL,
  `semester` varchar(255) DEFAULT NULL,
  `section` varchar(255) DEFAULT NULL,
  `subject` varchar(255) DEFAULT NULL,
  `exam_date` datetime DEFAULT NULL,
  `file_path` varchar(255) DEFAULT NULL,
  `cover_image` varchar(255) DEFAULT NULL,
  `notes` text DEFAULT NULL,
  `status` varchar(255) DEFAULT 'pending',
  `views` int(11) DEFAULT NULL,
  `downloads` int(11) DEFAULT NULL,
  `user_id` int(11) DEFAULT NULL,
  `url` varchar(255) DEFAULT NULL,
  `reviewer_name` varchar(255) DEFAULT NULL,
  `trash` tinyint(1) DEFAULT 0,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `submissions`
--

INSERT INTO `submissions` (`id`, `submission_type`, `title`, `authors`, `abstract`, `keywords`, `upload_date`, `journal_name`, `volume_issue_number`, `publication_date`, `doi`, `publisher`, `book_publication_date`, `isbn`, `edition`, `language`, `chapters`, `degree`, `department`, `university`, `institution`, `advisors`, `defense_date`, `conference_name`, `conference_date`, `conference_location`, `pages`, `presentation_type`, `event_name`, `event_date`, `question_paper_type`, `academic_year`, `course_name`, `semester`, `section`, `subject`, `exam_date`, `file_path`, `cover_image`, `notes`, `status`, `views`, `downloads`, `user_id`, `url`, `reviewer_name`, `trash`, `createdAt`, `updatedAt`) VALUES
(1, 'Book', 'bk2', 'John Doe, Jane Smith', 'This is a sample abstract.', 'keyword1, keyword2', '2024-10-18 09:26:21', 'Sample Journal', '12(3)', '2023-01-01 00:00:00', '10.1000/j.journalname.2023.01.001', 'Sample Publisher', '2023-01-01 00:00:00', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, 'approved', NULL, 20, 1, 'http://example.com', NULL, 0, '2024-10-18 09:26:21', '2024-10-18 09:26:21'),
(2, 'Book', 'bk3', 'John Doe, Jane Smith', 'This is a sample abstract.', 'keyword1, keyword2', '2024-10-18 09:26:28', 'Sample Journal', '12(3)', '2023-01-01 00:00:00', '10.1000/j.journalname.2023.01.001', 'Sample Publisher', '2023-01-01 00:00:00', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, 'approved', NULL, 20, 1, 'http://example.com', NULL, 0, '2024-10-18 09:26:28', '2024-10-18 09:26:28'),
(3, 'Book', 'bk4', 'John Doe, Jane Smith', 'This is a sample abstract.', 'keyword1, keyword2', '2024-10-18 09:26:34', 'Sample Journal', '12(3)', '2023-01-01 00:00:00', '10.1000/j.journalname.2023.01.001', 'Sample Publisher', '2023-01-01 00:00:00', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, 'approved', NULL, 20, 1, 'http://example.com', NULL, 0, '2024-10-18 09:26:34', '2024-10-18 09:26:34');

-- --------------------------------------------------------

--
-- Table structure for table `university`
--

CREATE TABLE `university` (
  `id` int(11) NOT NULL,
  `name` varchar(255) NOT NULL,
  `location` varchar(255) DEFAULT NULL,
  `established_year` int(11) DEFAULT NULL,
  `type` enum('Public','Private','Others') NOT NULL,
  `contact_phone` varchar(255) DEFAULT NULL,
  `contact_email` varchar(255) DEFAULT NULL,
  `contact_website` varchar(255) DEFAULT NULL,
  `number_of_students` int(11) DEFAULT NULL,
  `number_of_faculties` int(11) DEFAULT NULL,
  `affiliations` text DEFAULT NULL,
  `ranking` int(11) DEFAULT NULL,
  `courses_offered` text DEFAULT NULL,
  `description` text DEFAULT NULL,
  `campus_size` varchar(255) DEFAULT NULL,
  `logo` varchar(255) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `university`
--

INSERT INTO `university` (`id`, `name`, `location`, `established_year`, `type`, `contact_phone`, `contact_email`, `contact_website`, `number_of_students`, `number_of_faculties`, `affiliations`, `ranking`, `courses_offered`, `description`, `campus_size`, `logo`, `createdAt`, `updatedAt`) VALUES
(1, ' University of calicut', ' Trivandrum, Kerala, India', 1937, '', ' +91-471-2305631', ' info@keralauniversity.ac.in', ' http://www.keralauniversity.ac.in', 20000, 700, ' UGC, NAAC', 25, ' B.Com., B.Tech., M.Com., M.Tech.', ' A prestigious university in Kerala, known for its diverse academic programs.', ' 450 acres', NULL, '2024-10-18 09:27:11', '2024-10-18 09:27:11');

-- --------------------------------------------------------

--
-- Table structure for table `universitydepartments`
--

CREATE TABLE `universitydepartments` (
  `id` int(11) NOT NULL,
  `universityId` int(11) DEFAULT NULL,
  `departmentId` int(11) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `universitydepartments`
--

INSERT INTO `universitydepartments` (`id`, `universityId`, `departmentId`, `createdAt`, `updatedAt`) VALUES
(1, 1, 1, '2024-10-18 09:27:11', '2024-10-18 09:27:11'),
(2, 1, 2, '2024-10-18 09:27:11', '2024-10-18 09:27:11');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `college`
--
ALTER TABLE `college`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `collegedepartment`
--
ALTER TABLE `collegedepartment`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `unique_collegeDepartments` (`collegeId`,`departmentId`),
  ADD KEY `departmentId` (`departmentId`);

--
-- Indexes for table `collegedepartments`
--
ALTER TABLE `collegedepartments`
  ADD PRIMARY KEY (`id`),
  ADD KEY `collegeId` (`collegeId`),
  ADD KEY `departmentId` (`departmentId`);

--
-- Indexes for table `department`
--
ALTER TABLE `department`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `editorpostfeed`
--
ALTER TABLE `editorpostfeed`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `feedback`
--
ALTER TABLE `feedback`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `libfeedback`
--
ALTER TABLE `libfeedback`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `sequelizemeta`
--
ALTER TABLE `sequelizemeta`
  ADD PRIMARY KEY (`name`),
  ADD UNIQUE KEY `name` (`name`);

--
-- Indexes for table `staff`
--
ALTER TABLE `staff`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `submissions`
--
ALTER TABLE `submissions`
  ADD PRIMARY KEY (`id`),
  ADD KEY `fk_Submissions_user_id` (`user_id`);

--
-- Indexes for table `university`
--
ALTER TABLE `university`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `universitydepartments`
--
ALTER TABLE `universitydepartments`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `unique_universityDepartments` (`universityId`,`departmentId`),
  ADD KEY `departmentId` (`departmentId`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `college`
--
ALTER TABLE `college`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT for table `collegedepartment`
--
ALTER TABLE `collegedepartment`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `collegedepartments`
--
ALTER TABLE `collegedepartments`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;

--
-- AUTO_INCREMENT for table `department`
--
ALTER TABLE `department`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `editorpostfeed`
--
ALTER TABLE `editorpostfeed`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `feedback`
--
ALTER TABLE `feedback`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `libfeedback`
--
ALTER TABLE `libfeedback`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `staff`
--
ALTER TABLE `staff`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT for table `submissions`
--
ALTER TABLE `submissions`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT for table `university`
--
ALTER TABLE `university`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `universitydepartments`
--
ALTER TABLE `universitydepartments`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `collegedepartment`
--
ALTER TABLE `collegedepartment`
  ADD CONSTRAINT `collegedepartment_ibfk_1` FOREIGN KEY (`collegeId`) REFERENCES `college` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `collegedepartment_ibfk_2` FOREIGN KEY (`departmentId`) REFERENCES `department` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `collegedepartments`
--
ALTER TABLE `collegedepartments`
  ADD CONSTRAINT `collegedepartments_ibfk_1` FOREIGN KEY (`collegeId`) REFERENCES `college` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `collegedepartments_ibfk_2` FOREIGN KEY (`departmentId`) REFERENCES `department` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `submissions`
--
ALTER TABLE `submissions`
  ADD CONSTRAINT `fk_Submissions_user_id` FOREIGN KEY (`user_id`) REFERENCES `janeway`.`users` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `universitydepartments`
--
ALTER TABLE `universitydepartments`
  ADD CONSTRAINT `universitydepartments_ibfk_1` FOREIGN KEY (`universityId`) REFERENCES `university` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `universitydepartments_ibfk_2` FOREIGN KEY (`departmentId`) REFERENCES `department` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
