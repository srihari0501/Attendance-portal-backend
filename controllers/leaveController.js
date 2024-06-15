const Leave = require('../models/Leave');



exports.addLeave = async (req, res) => {
    try {
        const { userId } = req.user;
        if (!userId) {
            return res.status(401).json({ success: false, message: 'User not authorized' });
        }

        
        const { startDate, endDate, reason } = req.body;

        const newLeave = new Leave({
            startDate,
            endDate,
            reason,
            userId
        });

        const savedLeave = await newLeave.save();
        res.status(201).json(savedLeave);
    } catch (error) {
        console.error('Error adding leave:', error);
        res.status(500).json({ message: 'Failed to add leave' });
    }

      
};

// Update leave record
exports.updateLeave = async (req, res) => {
    try {
        const { startDate, endDate, reason } = req.body;
        const leaveId = req.params.id;

        const updatedLeave = await Leave.findByIdAndUpdate(
            leaveId,
            {
                startDate,
                endDate,
                reason
            },
            { new: true }
        );

        if (!updatedLeave) {
            return res.status(404).json({ message: 'Leave not found' });
        }

        res.json(updatedLeave);
    } catch (error) {
        console.error('Error updating leave:', error);
        res.status(500).json({ message: 'Failed to update leave' });
    }
};

// Delete leave record
exports.deleteLeave = async (req, res) => {
    try {
        const leaveId = req.params.id;

        const deletedLeave = await Leave.findByIdAndDelete(leaveId);

        if (!deletedLeave) {
            return res.status(404).json({ message: 'Leave not found' });
        }

        res.json({ message: 'Leave deleted successfully' });
    } catch (error) {
        console.error('Error deleting leave:', error);
        res.status(500).json({ message: 'Failed to delete leave' });
    }
};

exports.getLeavesByUser = async (req, res) => {
    try {
        const { userId } = req.user;

        if (!userId) {
            return res.status(401).json({ success: false, message: 'User not authorized' });
        }
        const leaves = await Leave.find({userId: userId });
        res.status(200).json(leaves);
    } catch (error) {
        res.status(500).json({ message: 'Error fetching leaves', error });
    }
};
