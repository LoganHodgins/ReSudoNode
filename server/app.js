const express = require('express');
const port = 5000;

const app = express();

app.use('/', (req, res, next) => {
  res.send('<h1>Hello World</h1>');
});

app.listen(port, () => {
  console.log(`Running on localhost:${port}`);
});
