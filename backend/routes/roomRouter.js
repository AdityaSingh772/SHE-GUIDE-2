// routes/roomRoutes.js

import express from 'express';
import Room from '../models/room';

const router = express.Router();

// Get all rooms
router.get('/', async (req, res) => {
    try {
        const rooms = await Room.find();
        res.json(rooms);
    } catch (error) {
        console.error('Error fetching rooms:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
});

// Add more routes for creating, updating, and deleting rooms...

export default router;
