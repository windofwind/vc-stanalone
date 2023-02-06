import express from 'express';

// Add Express

// Initialize Express
const app = express();

// Create GET request
app.get('/', (req, res) => {
  res.send('Express on Vercel');
});

// Initialize server
app.listen(5000, () => {
  console.log('Running on port 5000.');
});

module.exports = app;
