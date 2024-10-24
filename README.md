# EzyMetrics Backend

A Node.js and MongoDB API service that simulates fetching lead and campaign data, storing it in MongoDB, and generating reports in PDF and CSV formats.

## Setup Instructions

### Prerequisites

- Node.js (v14+ recommended)
- MongoDB (installed and running)

### Installation

1. Clone the repository:
   
   ```bash
   Copy code
   git clone https://github.com/your-repository/ezymetrics-backend.git
   cd ezymetrics-backend
   ```
   
2. Install dependencies:

```bash
Copy code
npm install
```

3. Configure environment variables: Create a .env file in the project root:

```bash
Copy code
MONGO_URI=mongodb://localhost:27017/ezyMetricsDB
PORT=5000
```

4. Start the MongoDB server:

```bash
Copy code
mongod
```

5. Run the Node.js server:

```bash
Copy code
npm start
```

## API Endpoints

1. Fetch and Store Data
POST /api/etl
Simulate fetching and storing leads and campaigns.

2. Generate Reports
-GET /api/report/pdf
Generate and download a PDF report of leads.

-GET /api/report/csv
Generate and download a CSV report of leads.

3. Health Check
-GET /
Check if the server is running.
