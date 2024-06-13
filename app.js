// const express = require('express');
// const mongoose = require('mongoose');
// const bodyParser = require('body-parser');
// const cors = require('cors'); // Import the cors middleware
// const authRoutes = require('./routes/auth');

// const app = express();

// // Middleware
// app.use(bodyParser.json());
// app.use(cors()); // Enable CORS for all routes

// // Connect to MongoDB
// mongoose.connect('mongodb://localhost:27017/attendance', {
//     useNewUrlParser: true,
//     useUnifiedTopology: true
// })
// .then(() => console.log('MongoDB connected'))
// .catch(err => console.error(err));

// // Routes
// app.use('/', authRoutes);

// // Start server
// const PORT = process.env.PORT || 3000;
// app.listen(PORT, () => {
//     console.log(`Server is running on port ${PORT}`);
// });

// const express = require('express');
// const mongoose = require('mongoose');
// const cors = require('cors');
// const dotenv = require('dotenv');
// dotenv.config();

// const app = express();
// const PORT = process.env.PORT || 3000;
// // Middleware
// app.use(cors());
// app.use(express.json());
// const authRoutes = require('./routes/auth');
// const dashboardRoutes = require('./routes/dashboard');
// const attendanceRoutes = require('./routes/attendance');
// // Load environment variables from .env file
// // Routes
// app.use('/api/auth', authRoutes);
// app.use('/api/dashboard', dashboardRoutes);
// app.use('/api/attendance', attendanceRoutes); 




// // Connect to MongoDB
// mongoose.connect('mongodb://localhost:27017/attendance', {
//     //useNewUrlParser: true,
//     //useUnifiedTopology: true,
// });



// app.listen(PORT, () => {
//     console.log(`Server is running on port ${PORT}`);
// });

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

app.use('/api/auth', authRoutes);
app.use('/api/dashboard', dashboardRoutes);
app.use('/api/attendance', attendanceRoutes); // Use attendance routes

// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/attendance', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
.then(() => {
    console.log('MongoDB connected');
})
.catch((err) => {
    console.error('MongoDB connection error:', err);
});

// Start server
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
