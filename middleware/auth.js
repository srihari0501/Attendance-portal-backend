const jwt = require('jsonwebtoken');
const User = require('../models/User');
require('dotenv').config();

const verifyToken = async (req, res, next) => {
    const token = req.header('Authorization')?.split(' ')[1];
    if (!token) {
        return res.status(401).json({ message: 'Access Denied' });
    }

    try {
        const verified = jwt.verify(token, process.env.JWT_SECRET);
        req.user = verified;
        console.log(req.user);
        next();
    } catch (error) {
        res.status(400).json({ message: 'Invalid Token' });
    }
};

module.exports = verifyToken;
