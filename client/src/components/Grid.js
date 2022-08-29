import Box from "./Box";

import classes from './Grid.module.css';

const Grid = () => {
  const sudoku = [[6, 1, -1, 4, -1, 8, 7, -1, -1],
                  [-1, -1, 5, -1, -1, 2, 6, -1, -1],
                  [4, -1, -1, 3, 7, -1, -1, -1, -1],
                  [-1, -1, -1, -1, -1, 1, 3, 8, 2],
                  [4, 2, -1, -1, 6, -1, -1, 5, 7],
                  [9, 8, 3, 7, -1, -1, -1, -1, -1],
                  [-1, -1, -1, -1, 7, 6, -1, -1, 4],
                  [-1, -1, 3, 5, -1, -1, 8, -1, -1],
                  [-1, -1, 8, 2, -1, 1, -1, 9, 7]];

  return (<div className={classes.container}><table className={classes.grid}><tbody><tr><Box box={sudoku[0]}/><Box box={sudoku[1]}/><Box box={sudoku[2]}/></tr>
  <tr><Box box={sudoku[3]}/><Box box={sudoku[4]}/><Box box={sudoku[5]}/></tr>
  <tr><Box box={sudoku[6]}/><Box box={sudoku[7]}/><Box box={sudoku[8]}/></tr></tbody></table></div>);
};

export default Grid;