const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    firstName: String,
    lastName: String,
    email: { type: String, unique: true, required: true },
    password: { type: String, required: true },
    attendance: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Attendance' }],
    leave: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Leave' }]
});

const User = mongoose.model('User', userSchema);

module.exports = User;
