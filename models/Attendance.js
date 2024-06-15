const mongoose = require('mongoose');

const attendanceSchema = new mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    date: {
        type: String, // Store date as a string in YYYY-MM-DD format
        required: true
    }
});

const Attendance = mongoose.model('Attendance', attendanceSchema);

module.exports = Attendance;


