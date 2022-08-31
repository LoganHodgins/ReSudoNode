import Cell from "./Cell";

import classes from './Box.module.css';

const Box = (props) => {
  const cells = [];
  
  for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 3; j++) {
      cells.push(<Cell value={props.values[i][j]}/>);
    }
  }

  return (<div className={classes.box}>{cells}</div>);
};

export default Box;