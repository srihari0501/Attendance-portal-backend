const mongoose = require('mongoose');

const leaveSchema = new mongoose.Schema({
    startDate: {
        type: Date,
        required: true
    },
    endDate: {
        type: Date,
        required: true
    },
    reason: {
        type: String,
        required: true
    },
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User', // Reference to User model if needed
        required: true
    }
});

const Leave = mongoose.model('Leave', leaveSchema);
module.exports = Leave;