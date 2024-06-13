// controllers/attendanceController.js
const Attendance = require('../models/Attendance');

exports.markAttendance = async (req, res) => {
    try {
        const { userId } = req.user;
        if (!userId) {
            return res.status(401).json({ success: false, message: 'User not authorized' });
        }

        const date = new Date().toISOString().split('T')[0]; // Get current date in YYYY-MM-DD format

        const existingAttendance = await Attendance.findOne({ userId, date });
        if (existingAttendance) {
            return res.status(400).json({ success: false, message: 'Attendance already marked for today' });
        }

        const newAttendance = new Attendance({ userId, date });
        await newAttendance.save();

        res.status(200).json({ success: true, message: 'Attendance marked successfully' });
    } catch (error) {
        console.error('Error marking attendance:', error);
        res.status(500).json({ success: false, message: 'Failed to mark attendance' });
    }
};
