import Box from "./Box";

import classes from './Grid.module.css';
// [0, 2] slice(0, 3)

// 0 -> slice(0, 3)
// 1 -> slice(3, 6)
// 2 -> slice(6, 9)
// [3, 5] slice(3, 6)
// [6, 8] slice(6, 9)
const getBox = (sudoku, box) => {
  let boxes = {
  '0': sudoku.slice(0, 3).map(arr => arr.slice(0, 3)),
  '1': sudoku.slice(0, 3).map(arr => arr.slice(3, 6)),
  '2': sudoku.slice(0, 3).map(arr => arr.slice(6, 9)),

  '3': sudoku.slice(3, 6).map(arr => arr.slice(0, 3)),
  '4': sudoku.slice(3, 6).map(arr => arr.slice(3, 6)),
  '5': sudoku.slice(3, 6).map(arr => arr.slice(6, 9)),

  '6': sudoku.slice(6, 9).map(arr => arr.slice(0, 3)),
  '7': sudoku.slice(6, 9).map(arr => arr.slice(3, 6)),
  '8': sudoku.slice(6, 9).map(arr => arr.slice(6, 9)),
  };

  return boxes[box];
};

const Grid = (props) => {
  const grid = [];
  for (let i = 0; i < 9; i++) {
    grid.push(<Box values={getBox(props.sudoku, i)} key={i} location={i}/>);
  }

  return (<div className={classes.grid}>{grid}</div>);
};

export default Grid;