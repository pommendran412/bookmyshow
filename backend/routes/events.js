const express = require('express');
const Event = require('../models/Event');
const authMiddleware = require('../middleware/authmiddleware');
const router = express.Router();

router.post('/', authMiddleware, async (req, res) => {
const { name, date, location, description } = req.body;

if (!name || !date || !location || !description) {
return res.status(400).json({ message: 'All fields are required' });
}

const event = new Event({
name,
date: new Date(date),
location,
description
});

await event.save();
res.status(201).json(event);
});

router.get('/', async (req, res) => {
const events = await Event.find();
res.json(events);
});

module.exports = router;
