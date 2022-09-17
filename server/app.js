const express = require('express');
const sudokuRoutes = require('./routes/sudoku');
const port = 8080;

const app = express();

app.use('/api/sudoku', sudokuRoutes);

app.use('/', (req, res, next) => {
  res.send('Hello World!');
});


app.listen(port, () => {
  console.log(`Running on localhost:${port}`);
});
