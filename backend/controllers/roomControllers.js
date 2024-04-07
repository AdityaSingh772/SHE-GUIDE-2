// controllers/roomController.js
const Room = require('../models/room');

// Controller functions for room routes

// Create a new room
const createRoom = async (req, res) => {
    try {
        const { name } = req.body;
        const room = new Room({ name });
        await room.save();
        res.status(201).json(room);
    } catch (error) {
        console.error('Error creating room:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
};

// Fetch all rooms
const getAllRooms = async (req, res) => {
    try {
        const rooms = await Room.find();
        res.json(rooms);
    } catch (error) {
        console.error('Error fetching rooms:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
};

// Fetch a specific room by ID
const getRoomById = async (req, res) => {
    try {
        const room = await Room.findById(req.params.roomId);
        if (!room) {
            return res.status(404).json({ error: 'Room not found' });
        }
        res.json(room);
    } catch (error) {
        console.error('Error fetching room:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
};

// Update a room by ID
const updateRoom = async (req, res) => {
    try {
        const { name, description } = req.body;
        const room = await Room.findByIdAndUpdate(req.params.roomId, { name, description }, { new: true });
        if (!room) {
            return res.status(404).json({ error: 'Room not found' });
        }
        res.json(room);
    } catch (error) {
        console.error('Error updating room:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
};

// Delete a room by ID
const deleteRoom = async (req, res) => {
    try {
        const room = await Room.findByIdAndDelete(req.params.roomId);
        if (!room) {
            return res.status(404).json({ error: 'Room not found' });
        }
        res.json({ message: 'Room deleted successfully' });
    } catch (error) {
        console.error('Error deleting room:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
};

module.exports = {
    createRoom,
    getAllRooms,
    getRoomById,
    updateRoom,
    deleteRoom
};
