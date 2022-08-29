import classes from './Cell.module.css'

const Cell = (props) => {
  const value = props.value > 0 ? props.value.toString() : "";
  return (<td className={classes.cell}>{value}</td>);
};

export default Cell;