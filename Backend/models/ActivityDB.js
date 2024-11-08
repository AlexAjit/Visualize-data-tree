// models/ActivityDB.js

const mongoose = require('mongoose');

const ActivitySchema = new mongoose.Schema({
  activity: { type: String, required: true },
  timestamp: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Activity', ActivitySchema);
