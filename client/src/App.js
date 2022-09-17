import { Fragment, useEffect, useState } from "react";
import Grid from "./components/Board/Grid";
import Numpad from './components/UI/Numpad';

import classes from './App.module.css';

function App() {
  const [initBoard, setInitBoard] = useState();
  const [boardID, setboardID] = useState();
  const [isLoading, setIsLoading] = useState(false);

  async function fetchBoard() {
    setIsLoading(false);
    const response = await fetch('api/sudoku/Easy');
    const data = await response.json();

    const [board] = data;
    console.log(board);

    setInitBoard(() => {
      let strBoard = board.init_board;
      let numBoard = [];
      
      for (let i = 0; i < 9; i++) {
        numBoard.push(strBoard.slice(i*9, (i*9) + 9).split('').map(Number));
      }

      return numBoard;
    });

    setboardID(board.board_id);

    setIsLoading(true);
  }

  useEffect(() => {
    fetchBoard();
  }, []);

  return (<Fragment>
    <div className={classes['game-container']}>
      {isLoading && <h2 className={classes['header-text']}>{`Puzzle #${boardID}`}</h2>}
      {isLoading && <Grid sudoku={initBoard} styles={classes.game} /> }
      <Numpad fetchBoard={fetchBoard} />
    </div>
  </Fragment>);
}

export default App;
