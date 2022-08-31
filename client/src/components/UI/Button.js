import classes from './Button.module.css';

const Button = (props) => {
  return (
    <button className={classes['numpad-item']} style={props.style}>{props.value}</button>
  );
};

export default Button;