const mongoose = require('mongoose');

const CampaignSchema = new mongoose.Schema({
  name: String,
  startDate: Date,
  endDate: Date,
  budget: Number,
  leadsGenerated: { type: Number, default: 0 },
  createdAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model('Campaign', CampaignSchema);
