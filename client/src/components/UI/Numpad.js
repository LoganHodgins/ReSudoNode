import Button from "./Button";

import classes from './Numpad.module.css';

const Numpad = () => {
  return (<div className={classes.numpad}>
    <Button value={'New Game'} style={{gridColumn: '1/4'}}/>
    <Button value={7}/><Button value={8}/><Button value={9}/>
    <Button value={4}/><Button value={5}/><Button value={6}/>
    <Button value={1}/><Button value={2}/><Button value={3}/>
  </div>);
};

export default Numpad;