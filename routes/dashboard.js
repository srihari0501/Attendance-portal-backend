const express = require('express');
const router = express.Router();
const dashboardController = require('../controllers/dashboardController');
const verifyToken = require('../middleware/auth');

router.get('/userData', verifyToken, dashboardController.getUserData);
router.get('/attendance/summary', verifyToken, dashboardController.getAttendanceSummary);

module.exports = router;
