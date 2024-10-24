const Lead = require('../models/Lead');
const PDFDocument = require('pdfkit');
const { Parser } = require('json2csv');

const generatePDFReport = async (req, res) => {
  try {
    const leads = await Lead.find();

    const doc = new PDFDocument();
    res.setHeader('Content-Type', 'application/pdf');
    res.setHeader('Content-Disposition', 'attachment; filename=report.pdf');

    doc.text('Lead Report');
    leads.forEach(lead => {
      doc.text(`Name: ${lead.name}, Email: ${lead.email}, Phone: ${lead.phone}`);
    });

    doc.pipe(res);
    doc.end();
  } catch (err) {
    res.status(500).json({ message: "Error generating PDF report.", error: err });
  }
};

const generateCSVReport = async (req, res) => {
  try {
    const leads = await Lead.find();
    const fields = ['name', 'email', 'phone', 'source'];
    const parser = new Parser({ fields });
    const csv = parser.parse(leads);

    res.setHeader('Content-Type', 'text/csv');
    res.setHeader('Content-Disposition', 'attachment; filename=report.csv');
    res.status(200).end(csv);
  } catch (err) {
    res.status(500).json({ message: "Error generating CSV report.", error: err });
  }
};

module.exports = { generatePDFReport, generateCSVReport };
