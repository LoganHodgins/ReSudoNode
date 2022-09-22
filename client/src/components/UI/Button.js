import classes from './Button.module.css';

const Button = (props) => {
  return (
    <button onClick={props.onClick} className={classes['numpad-item']} style={props.style}>{props.children}</button>
  );
};

export default Button;