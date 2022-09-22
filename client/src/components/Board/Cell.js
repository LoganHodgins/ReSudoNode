import { useContext, useEffect } from 'react';
import CurrentContext from '../../store/current-context';
import classes from './Cell.module.css'

const Cell = (props) => {
  const ctx = useContext(CurrentContext);

  const clickHandler = () => {
    ctx.setCurrentCell(props.location, props.i, props.j);
  };

  const value = props.value > 0 ? props.value.toString() : "";
  return (<div className={classes.cell} onClick={clickHandler}>{value}</div>);
};

export default Cell;