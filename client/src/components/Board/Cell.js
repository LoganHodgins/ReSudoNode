import { useContext, useEffect, useState } from 'react';
import CurrentContext from '../../store/current-context';
import classes from './Cell.module.css'

const Cell = (props) => {
  const [isGroup, setIsGroup] = useState(false);
  const [isActive, setIsActive] = useState(false);
  
  const ctx = useContext(CurrentContext);

  let i = Math.floor(props.location / 3) * 3 + props.i;
  let j = (props.location % 3) * 3 + props.j;

  useEffect(() => {
    setIsGroup(false);
    setIsActive(false);

    if (i === ctx.i && j === ctx.j) {
      setIsActive(true);
    } else if (i === ctx.i || j === ctx.j || props.location === ctx.loc) {
      setIsGroup(true);
    }

  }, [ctx.i, ctx.j]);

  const clickHandler = () => {
    ctx.setCurrentCell(props.location, i, j);
  };

  let isConst = ctx.initBoard[i][j] > 0;

  const style = `${classes.cell} 
                 ${isGroup ? classes['cell-group'] : ''} 
                 ${isActive ? classes['cell-active'] : ''}
                 ${isConst ? classes['cell-constant']: ''}`;

  const value = props.value > 0 ? props.value.toString() : "";

  return (<div className={style} onClick={clickHandler}>{value}</div>);
};

export default Cell;