import { Fragment } from "react";
import Grid from "./components/Board/Grid";
import Numpad from './components/UI/Numpad';

function App() {
  return (<Fragment>
    <h2>Puzzle #165</h2>
    <Grid />
    <Numpad />
  </Fragment>);
}

export default App;
