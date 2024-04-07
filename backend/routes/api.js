

const express = require('express');
const router = express.Router();
const User = require('../models/user');

router.post('/users', async (req, res) => {
    try {
        console.log('hh')
        const {
            githubLink,
            linkedinLink,
            username,
            email,
            gender,
            applyingAs,
            // description,
            // aadhaarImage,
            isReviewed
        } = req.body;

        console.log('hh2')
        const newUser = new User({
            githubLink,
            linkedinLink,
            username,
            email,
            gender,
            applyingAs,
            // description,
            // aadhaarImage,
            isReviewed
        });
        console.log('hh3')
        await newUser.save();
        res.status(201).json(newUser);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
});

module.exports = router;