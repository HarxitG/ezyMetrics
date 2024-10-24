const express = require('express');
const { generatePDFReport, generateCSVReport } = require('../controllers/reportController');
const router = express.Router();

router.get('/report/pdf', generatePDFReport);
router.get('/report/csv', generateCSVReport);

module.exports = router;
