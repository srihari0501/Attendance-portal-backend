// // models/User.js
// const mongoose = require('mongoose');

// const userSchema = new mongoose.Schema({
//     firstName: String,
//     lastName: String,
//     email: { type: String, unique: true },
//     password: String,
//     attendance: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Attendance' }],
//     leaves: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Leave' }]
// });

// const User = mongoose.model('User', userSchema);

// module.exports = User;

// const mongoose = require('mongoose');

// const userSchema = new mongoose.Schema({
//     firstName: String,
//     lastName: String,
//     email: { type: String, unique: true },
//     password: String,
//     attendance: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Attendance' }],
//     leaves: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Leave' }]
// });

// const User = mongoose.model('User', userSchema);

// module.exports = User;
// models/User.js
const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    firstName: String,
    lastName: String,
    email: { type: String, unique: true, required: true },
    password: { type: String, required: true },
    attendance: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Attendance' }],
    leaves: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Leave' }]
});

const User = mongoose.model('User', userSchema);

module.exports = User;
