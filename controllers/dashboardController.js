const User = require('../models/User');
const Attendance = require('../models/Attendance');

exports.getUserData = async (req, res) => {
    try {
        const userId = req.userId;
        const userData = await User.findById(userId).populate('attendance').populate('leave');
        res.status(200).json(userData);
    } catch (error) {
        console.error('Error fetching user data:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
};

exports.getAttendanceSummary = async (req, res) => {
    try {
        const userId = req.userId;
        console.log("aa" + userId);
        const attendanceSummary = await Attendance.find({ userId: userId });
        console.log("ada" + userId);
        res.status(200).json(attendanceSummary);
    } catch (error) {
        console.error('Error fetching attendance summary:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
};


