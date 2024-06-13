const express = require('express');
const router = express.Router();
const dashboardController = require('../controllers/dashboardController');
const authMiddleware = require('../middleware/auth');

router.get('/userData', authMiddleware, dashboardController.getUserData);
router.get('/attendance/summary', authMiddleware, dashboardController.getAttendanceSummary);
module.exports = router;
