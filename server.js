const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
require('dotenv').config();

const app = express();

app.use(bodyParser.json());

mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.log(err));

const etlRoutes = require('./routes/etlRoutes');
const reportRoutes = require('./routes/reportRoutes');

app.use('/api', etlRoutes);
app.use('/api', reportRoutes);

app.get('/', (req, res) => {
  res.send('EzyMetrics API is running...');
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

