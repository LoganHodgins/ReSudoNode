import { useContext, useEffect, useState } from 'react';
import CurrentContext from '../../store/current-context';
import classes from './Cell.module.css'

const Cell = (props) => {
  const [active, setActive] = useState(false);
  const ctx = useContext(CurrentContext);
  
  let i = Math.floor(props.location / 3) * 3 + props.i;
  let j = (props.location % 3) * 3 + props.j;

  useEffect(() => {
    if (i === ctx.i && j === ctx.j) {
      setActive(true);
    } else {
      setActive(false);
    }

  }, [ctx.i, ctx.j]);

  const clickHandler = () => {
    ctx.setCurrentCell(props.location, i, j);
  };

  const value = props.value > 0 ? props.value.toString() : "";
  return (<div className={`${classes.cell} ${active ? classes['cell-clicked'] : ''}`} onClick={clickHandler}>{value}</div>);
};

export default Cell;