const express = require('express');
const router = express.Router();
const User = require('../models/user');

// Route to fetch users with pending review
router.get('/users/get', async (req, res) => {
    try {
        const pendingUsers = await User.find({ isReviewed: 'pending' }); // Fetch users with 'pending' review status
        res.json(pendingUsers); // Return the users with pending review status as JSON response
    } catch (error) {
        res.status(500).json({ message: error.message }); // Handle errors
    }
});

module.exports = router;
