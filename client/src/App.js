import { Fragment, useContext, useEffect, useState } from "react";
import Grid from "./components/Board/Grid";
import Numpad from './components/UI/Numpad';
import CurrentContext from "./store/current-context";
import classes from './App.module.css';

function App() {
  const [board, setBoard] = useState();
  const [boardID, setboardID] = useState();
  const [difficulty, setDifficulty] = useState();
  const [isLoading, setIsLoading] = useState(true);

  const ctx = useContext(CurrentContext);

  async function fetchBoardHandler() {
    setIsLoading(true);
    const response = await fetch('api/sudoku/Easy');
    const data = await response.json();

    const [databoard] = data;

    let strBoard = databoard.init_board;
    let numBoard = [];
    for (let i = 0; i < 9; i++) {
      numBoard.push(strBoard.slice(i * 9, (i * 9) + 9).split('').map(Number));
    }

    setBoard(numBoard);
    ctx.setInitBoard(JSON.parse(JSON.stringify(numBoard)));

    setboardID(databoard.board_id);
    setDifficulty(databoard.difficulty);

    setIsLoading(false);
  }

  useEffect(() => {
    fetchBoardHandler();
  }, []);

  return (<Fragment>
    <div className={classes['game-container']}>
      {!isLoading && <h2 className={classes['header-text']}>{`${difficulty} Puzzle #${boardID}`}</h2>}
      {!isLoading && <Grid sudoku={board} styles={classes.game} />}
      <Numpad fetchBoard={fetchBoardHandler} setBoard={setBoard} />
    </div>
  </Fragment>);
}

export default App;
