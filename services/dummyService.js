const fetchLeads = () => {
  return [
    { name: "John Doe", email: "john@example.com", phone: "1234567890", source: "Google Ads" },
    { name: "Jane Smith", email: "jane@example.com", phone: "0987654321", source: "Facebook Ads" },
  ];
};

const fetchCampaigns = () => {
  return [
    { name: "Google Ads Campaign", startDate: new Date("2023-01-01"), endDate: new Date("2023-03-31"), budget: 5000 },
    { name: "Facebook Ads Campaign", startDate: new Date("2023-02-01"), endDate: new Date("2023-04-01"), budget: 3000 },
  ];
};

module.exports = { fetchLeads, fetchCampaigns };
