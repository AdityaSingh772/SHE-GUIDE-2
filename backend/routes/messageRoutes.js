// routes/messageRoutes.js

const express = require('express');
const router = express.Router();
const Message = require('../models/message');

// Get messages for a specific room
router.get('/', async (req, res) => {
    try {
        const roomId = req.query.roomId;
        const messages = await Message.find({ room: roomId }).sort({ createdAt: 1 });
        res.json(messages);
    } catch (error) {
        console.error('Error fetching messages:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
});

// Add more routes for creating, updating, and deleting messages...

module.exports = router;
