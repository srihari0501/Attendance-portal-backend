const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const dotenv = require('dotenv');
dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(cors());
app.use(express.json());

// Routes
const authRoutes = require('./routes/auth');
const dashboardRoutes = require('./routes/dashboard');
const attendanceRoutes = require('./routes/attendance'); // Import attendance routes
const leaveRoutes = require('./routes/leave');

app.use('/api/auth', authRoutes);
app.use('/api/dashboard', dashboardRoutes);
app.use('/api/attendance', attendanceRoutes); // Use attendance routes
app.use('/api/leave', leaveRoutes);
// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/attendance', {

})
.then(() => {
})
.catch((err) => {
    console.error('MongoDB connection error:', err);
});

// Start server
app.listen(PORT, () => {
});
