// routes/activityDBRoutes.js

const express = require('express');
const router = express.Router();
const Activity = require('../models/ActivityDB');

router.post('/log', async (req, res) => {
  try {
    const activity = new Activity(req.body);
    await activity.save();
    res.status(201).json(activity);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

router.get('/activities', async (req, res) => {
  try {
    const activities = await Activity.find();
    res.json(activities);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

module.exports = router;
