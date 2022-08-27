import Cell from "./Cell";

import classes from './Box.module.css';

const Box = () => {
  return (<td><table className={classes.box}>
    <tbody>
      <tr><Cell /><Cell /><Cell /></tr>
      <tr><Cell /><Cell /><Cell /></tr>
      <tr><Cell /><Cell /><Cell /></tr>
    </tbody>
  </table></td>);
};

export default Box;