const express = require('express');
const pool = require('./db');
const app = express();
const PORT = 3000;

app.get('/cv', async (req, res) => {
  try {
    const result = await pool.query('SELECT * FROM cv');
    res.json(result.rows);
  } catch (err) {
    console.error(err);
    res.status(500).send('Serverfel');
  }
});

// ✅ NY ENDPOINT
app.get('/about', (req, res) => {
  res.json({
    app: 'CV-applikation',
    version: '2.0',
    author: 'Yozra'
  });
});

app.listen(PORT, () => {
  console.log(`Servern körs på http://localhost:${PORT}`);
});

