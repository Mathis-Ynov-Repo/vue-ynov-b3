const express = require('express');
require('dotenv').config();

const path = `${__dirname}/build`;
const app = express();
const history = require('connect-history-api-fallback');

app.use(express.static(path));
app.use(history());
app.use(express.static(path));

app.get('/', (req, res) => {
  res.sendFile(`${path}/index.html`);
});

app.get('/api/valorant', async (req, res) => {
  try {
    const val = { missile: 54, name: 'Viber' };
    res.send(val);
  } catch (err) {
    res.send(err);
  }
});

const PORT = process.env.PORT || 8080;

app.listen(PORT, () => {
  console.log(`running on port ${PORT}`);
});
