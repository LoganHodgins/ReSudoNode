import { Fragment, useEffect, useState } from "react";
import Grid from "./components/Board/Grid";
import Numpad from './components/UI/Numpad';

import classes from './App.module.css';

function App() {
  const [board, setBoard] = useState();
  const [boardID, setboardID] = useState();
  const [difficulty, setDifficulty] = useState();
  const [isLoading, setIsLoading] = useState(false);

  // DUMMY VALUES
  const cloc = 6;
  const ci = 2;
  const cj = 1;

  const userInputHandler = () => {
    let i = Math.floor(cloc / 3) * 3 + ci;
    let j = (cloc % 3) * 3 + cj;

    console.log(`i=${i}, j=${j}`);
  };

  async function fetchBoardHandler() {
    setIsLoading(false);
    const response = await fetch('api/sudoku/Easy');
    const data = await response.json();

    const [databoard] = data;

    setBoard(() => {
      let strBoard = databoard.init_board;
      let numBoard = [];
      
      for (let i = 0; i < 9; i++) {
        numBoard.push(strBoard.slice(i*9, (i*9) + 9).split('').map(Number));
      }

      return numBoard;
    });

    setboardID(databoard.board_id);
    setDifficulty(databoard.difficulty);

    setIsLoading(true);
  }

  useEffect(() => {
    fetchBoardHandler();
  }, []);

  return (<Fragment>
    <div className={classes['game-container']}>
      {isLoading && <h2 className={classes['header-text']}>{`${difficulty} Puzzle #${boardID}`}</h2>}
      {isLoading && <Grid sudoku={board} styles={classes.game} /> }
      <Numpad fetchBoard={fetchBoardHandler} userInput={userInputHandler} />
    </div>
  </Fragment>);
}

export default App;
