import { Fragment } from "react";
import Grid from "./components/Board/Grid";
import Numpad from './components/UI/Numpad';

import classes from './App.module.css';

function App() {
  return (<Fragment>
    <div className={classes['game-container']}>
      <h2 className={classes['header-text']}>Puzzle #165</h2>
      <Grid styles={classes.game}/>
      <Numpad />
    </div>
  </Fragment>);
}

export default App;
