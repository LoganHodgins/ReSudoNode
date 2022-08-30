import Cell from "./Cell";

import classes from './Box.module.css';

const Box = (props) => {
  return (<div className={classes.box}>
    <Cell value={-1}/><Cell value={-1}/><Cell value={-1}/>
    <Cell value={-1}/><Cell value={-1}/><Cell value={-1}/>
    <Cell value={-1}/><Cell value={-1}/><Cell value={-1}/>
  </div>);
};

export default Box;