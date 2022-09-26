import { Fragment, useContext, useEffect, useState } from "react";
import Grid from "./components/Board/Grid";
import Numpad from './components/UI/Numpad';
import CurrentContext from "./store/current-context";
import classes from './App.module.css';
import LoadingGlass from "./components/Board/LoadingGlass";

function App() {
  const DUMMY_BOARD = [[0, 0, 0, 0, 0, 3, 0, 8, 0],
        [0, 4, 0, 0, 5, 0, 7, 0, 1],
[0, 9, 8, 4, 0, 0, 2, 0, 0],
[0, 3, 2, 7, 8, 0, 0, 1, 9],
[0, 1, 0, 0, 0, 6, 0, 0, 0],
[5, 8, 6, 9, 0, 0, 0, 0, 7],
[9, 2, 0, 0, 3, 0, 5, 0, 0],
[0, 0, 4, 0, 0, 1, 0, 6, 3],
[0, 0, 5, 8, 7, 0, 0, 2, 0]]

  const [board, setBoard] = useState(DUMMY_BOARD);
  const [boardID, setboardID] = useState('');
  const [difficulty, setDifficulty] = useState('Loading...');
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
      {isLoading && <LoadingGlass />}
      <h2 className={classes['header-text']}>{`${difficulty} Puzzle #${boardID}`}</h2>
      <Grid sudoku={board}/>
      <Numpad fetchBoard={fetchBoardHandler} setBoard={setBoard} />
    </div>
  </Fragment>);
}

export default App;
