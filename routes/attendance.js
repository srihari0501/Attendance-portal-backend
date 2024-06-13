// routes/attendance.js
const express = require('express');
const router = express.Router();
const attendanceController = require('../controllers/attendanceController');
const verifyToken = require('../middleware/auth');

router.post('/mark', verifyToken, attendanceController.markAttendance);

module.exports = router;
