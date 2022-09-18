import Button from "./Button";

import classes from './Numpad.module.css';

const Numpad = (props) => {
  return (<div className={classes.numpad}>
    <Button onClick={props.fetchBoard} value={'New Game'} style={{gridColumn: '1/4'}}/>
    <Button value={'Solve'} style={{gridColumn: '1/4'}}/>
    <Button value={7} onClick={props.userInput}/><Button value={8} onClick={props.userInput}/><Button value={9} onClick={props.userInput}/>
    <Button value={4} onClick={props.userInput}/><Button value={5} onClick={props.userInput}/><Button value={6} onClick={props.userInput}/>
    <Button value={1} onClick={props.userInput}/><Button value={2} onClick={props.userInput}/><Button value={3} onClick={props.userInput}/>
  </div>);
};

export default Numpad;