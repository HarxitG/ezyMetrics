const Lead = require('../models/Lead');
const Campaign = require('../models/Campaign');
const { fetchLeads, fetchCampaigns } = require('../services/dummyService');

const storeLeadsAndCampaigns = async (req, res) => {
  try {
    const leads = fetchLeads();
    const campaigns = fetchCampaigns();

    await Lead.insertMany(leads);

    await Campaign.insertMany(campaigns);

    res.status(200).json({ message: "Data successfully fetched and stored." });
  } catch (err) {
    res.status(500).json({ message: "Error storing data.", error: err });
  }
};

module.exports = { storeLeadsAndCampaigns };
