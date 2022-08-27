import Box from "./Box";

import classes from './Grid.module.css';

const Grid = () => {
  return (<table className={classes.grid}><tbody><tr><Box /><Box /><Box /></tr>
  <tr><Box /><Box /><Box /></tr>
  <tr><Box /><Box /><Box /></tr></tbody></table>);
};

export default Grid;