// // controllers/dashboardController.js

// const User = require('../models/User');
// // const Attendance = require('../models/Attendance');

// exports.getUserData = async (req, res) => {
//     try {
//         const userData = await User.find(); // Fetch all user data
//         res.status(200).json(userData);
//     } catch (error) {
//         console.error('Error fetching user data:', error);
//         res.status(500).json({ error: 'Internal Server Error' });
//     }
// };

// exports.getAttendanceSummary = async (req, res) => {
//     try {
//         const attendanceSummary = await Attendance.find(); // Fetch all attendance summary
//         res.status(200).json(attendanceSummary);
//     } catch (error) {
//         console.error('Error fetching attendance summary:', error);
//         res.status(500).json({ error: 'Internal Server Error' });
//     }
// };

const User = require('../models/User');
const Attendance = require('../models/Attendance');

exports.getUserData = async (req, res) => {
    try {
        const userId = req.userId;
        const userData = await User.findById(userId).populate('attendance').populate('leaves');
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


