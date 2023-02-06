import express from 'express';
import { v4 } from 'uuid';

// Add Express

// Initialize Express
const app = express();

// Create GET request
app.get('/', (req, res) => {
  res.send('Express on Vercel');
});

app.get('/api', (req, res) => {
  const path = `/api/item/${v4()}`;
  res.setHeader('Content-Type', 'text/html');
  res.setHeader('Cache-Control', 's-max-age=1, stale-while-revalidate');
  res.end(`Hello! Go to item: <a href="${path}">${path}</a>`);
});

app.get('/api/item/:slug', (req, res) => {
  const { slug } = req.params;
  res.end(`Item: ${slug}`);
});

// Initialize server
app.listen(process.env.PORT || 3000, () => {
  console.log('Running on port 5000.');
});

module.exports = app;
