import { useEffect } from 'react';
import classes from './Cell.module.css'

const Cell = (props) => {
  const clickHandler = () => {
    console.log(`loc=${props.location}, i=${props.i} j=${props.j}`);
  };

  const value = props.value > 0 ? props.value.toString() : "";
  return (<div className={classes.cell} onClick={clickHandler}>{value}</div>);
};

export default Cell;