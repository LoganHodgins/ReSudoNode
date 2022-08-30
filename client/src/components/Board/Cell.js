import classes from './Cell.module.css'

const Cell = (props) => {
  //const value = props.value > 0 ? props.value.toString() : "";
  const value = props.value;
  return (<div className={classes.cell}>{value}</div>);
};

export default Cell;