const mongoose = require('mongoose');

const roomSchema = new mongoose.Schema({
    name: { type: String, required: true },
    messages: [{
        sender: { type: String, required: true },
        text: { type: String, required: true },
        textTranslated: { type: String },
        timestamp: { type: Date, default: Date.now }
    }]
});

const Room = mongoose.model('Room', roomSchema);

module.exports = Room;
