const { Router } = require('express');
const { getBoard } = require('../controllers/sudoku');
const router = Router();

router.get('/:difficulty', getBoard);

module.exports = router;