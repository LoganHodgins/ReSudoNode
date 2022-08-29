import Cell from "./Cell";

import classes from './Box.module.css';

const Box = (props) => {
  return (<td><table className={classes.box}>
    <tbody>
      <tr><Cell value={props.box[0]}/><Cell value={props.box[1]}/><Cell value={props.box[2]} /></tr>
      <tr><Cell value={props.box[3]}/><Cell value={props.box[4]}/><Cell value={props.box[5]}/></tr>
      <tr><Cell value={props.box[6]}/><Cell value={props.box[7]}/><Cell value={props.box[8]}/></tr>
    </tbody>
  </table></td>);
};

export default Box;