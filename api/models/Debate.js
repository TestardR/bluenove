const mongoose = require('mongoose');

const DebateSchema = mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  subject: {
    type: String,
  },
  startDate: {
    type: Date,
    default: Date.now,
    required: true
  },
  endDate: {
    type: String,
    default: Date.now,
    required: true
  },
});

module.exports = mongoose.model('debate', DebateSchema);