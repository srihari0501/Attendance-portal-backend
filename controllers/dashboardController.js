const User = require('../models/User');
const Attendance = require('../models/Attendance');

exports.getUserData = async (req, res) => {
    try {
        const userId = req.userId;
        console.log('uid' + userId);
        const userData = await User.find({ user: userId });
        console.log('userData id' + userData);
        res.status(200).json(userData);
    } catch (error) {
        console.error('Error fetching user data:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
};

exports.getAttendanceSummary = async (req, res) => {
    try {
        const userId = req.userId;
        const attendanceSummary = await Attendance.find({ user: userId });
        res.status(200).json(attendanceSummary);
    } catch (error) {
        console.error('Error fetching attendance summary:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
};


