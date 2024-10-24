const express = require('express');
const { storeLeadsAndCampaigns } = require('../controllers/etlController');
const router = express.Router();

router.post('/etl', storeLeadsAndCampaigns);

module.exports = router;
