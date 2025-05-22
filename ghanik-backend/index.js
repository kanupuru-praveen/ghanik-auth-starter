// index.js
const express = require('express');
const app = express();
const dotenv = require('dotenv');
const authRoutes = require('./routes/auth'); // Check this path

dotenv.config();
app.use(express.json());

app.use('/api/auth', authRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
