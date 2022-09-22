import { useContext } from "react";
import Button from "./Button";
import CurrentContext from "../../store/current-context";

import classes from './Numpad.module.css';

const Numpad = (props) => {
  const ctx = useContext(CurrentContext);
  
  const userInputHandler = (value) => {
    
    props.setBoard(prevBoard => {
      let newBoard = [...prevBoard];
      newBoard[ctx.i][ctx.j] = value;

      return newBoard;
    });
  };

  return (<div className={classes.numpad}>
    <Button onClick={props.fetchBoard} style={{gridColumn: '1/4'}}>New Game</Button>
    <Button style={{gridColumn: '1/4'}}>Solve</Button>
    <Button onClick={() => userInputHandler(7)}>7</Button>
    <Button onClick={() => userInputHandler(8)}>8</Button>
    <Button onClick={() => userInputHandler(9)}>9</Button>
    <Button onClick={() => userInputHandler(4)}>4</Button>
    <Button onClick={() => userInputHandler(5)}>5</Button>
    <Button onClick={() => userInputHandler(6)}>6</Button>
    <Button onClick={() => userInputHandler(1)}>1</Button>
    <Button onClick={() => userInputHandler(2)}>2</Button>
    <Button onClick={() => userInputHandler(3)}>3</Button>
  </div>);
};

export default Numpad;