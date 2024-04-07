const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    githubLink: String,
    linkedinLink: String,
    username: String,
    email: { type: String, unique: true }, // Make email field unique
    gender: String,
    role: { type: String, enum: ['mentor', 'mentee'] },
    // description: String,
    isReviewed: { type: String, default: 'pending' } // Default value set to 'pending'
});

const User = mongoose.model('User', userSchema);

module.exports = User;
