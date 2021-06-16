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

const PORT = process.env.PORT || 8080;

app.listen(PORT, () => {
  console.log(`running on port ${PORT}`);
});
