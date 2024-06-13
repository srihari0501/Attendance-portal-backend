// const express = require('express');
// const router = express.Router();
// const authController = require('../controllers/authController');
// const dashboardController = require('../controllers/dashboardController')

// // Login route
// router.post('/login', authController.login);

// // Signup route
// router.post('/signup', authController.signup);

// router.get('/userData', dashboardController.getUserData);
// router.get('/attendanceSummary', dashboardController.getAttendanceSummary);

// module.exports = router;
const express = require('express');
const router = express.Router();
const authController = require('../controllers/authController');

router.post('/login', authController.login);
router.post('/signup', authController.signup);

module.exports = router;

