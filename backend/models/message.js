// models/Message.js
const mongoose = require('mongoose');

const messageSchema = new mongoose.Schema({
    room: {
        type: String,
        ref: 'Room', // Reference to the Room model
    },

    text: {
        type: String,
        required: true,
    },
    translatedText: {
        type: String,
        default: 'Message cannot be translated !'
    },
    createdAt: {
        type: Date,
        default: Date.now,
    },
});

const Message = mongoose.model('Message', messageSchema);

module.exports = Message;
