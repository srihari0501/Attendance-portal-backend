const express = require('express');
const router = express.Router();
const leaveController = require('../controllers/leaveController');
const verifyToken = require('../middleware/auth');

router.post('/', verifyToken, leaveController.addLeave);
router.put('/:id',verifyToken, leaveController.updateLeave);
router.delete('/:id', verifyToken, leaveController.deleteLeave);
router.get('/user', verifyToken, leaveController.getLeavesByUser);

module.exports = router;
