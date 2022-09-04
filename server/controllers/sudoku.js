const db = require('../db/db');

const getBoard = (req, res, next) => {
  db.query("SELECT * FROM sudoku WHERE difficulty = $1 ORDER BY RANDOM() LIMIT 1", [req.params.difficulty],  (err, result) => {
    if (err) {
      console.log(err);
      return;
    }

    res.status(200).json(result.rows);
  });
};

module.exports = {
  getBoard,
};