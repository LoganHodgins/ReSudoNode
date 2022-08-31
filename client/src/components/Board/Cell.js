import classes from './Cell.module.css'

const Cell = (props) => {
  const value = props.value > 0 ? props.value.toString() : "";
  return (<div className={classes.cell}>{value}</div>);
};

export default Cell;