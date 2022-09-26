import React, { useState } from 'react';

const CurrentContext = React.createContext({
  i: 0,
  j: 0,
  loc: 0,
  initBoard: [],
  setCurrentCell: () => {},
  setInitBoard: () => {}
});

export const CurrentContextProvider = (props) => {
  const [i, seti] = useState(0);
  const [j, setj] = useState(0);
  const [loc, setLoc] = useState(0);
  const [initBoard, setInitBoard] = useState([[0, 0, 0, 0, 0, 3, 0, 8, 0],
    [0, 4, 0, 0, 5, 0, 7, 0, 1],
[0, 9, 8, 4, 0, 0, 2, 0, 0],
[0, 3, 2, 7, 8, 0, 0, 1, 9],
[0, 1, 0, 0, 0, 6, 0, 0, 0],
[5, 8, 6, 9, 0, 0, 0, 0, 7],
[9, 2, 0, 0, 3, 0, 5, 0, 0],
[0, 0, 4, 0, 0, 1, 0, 6, 3],
[0, 0, 5, 8, 7, 0, 0, 2, 0]]);

  const setCurrentCell = (loc, di, dj) => {
    seti(di);
    setj(dj);
    setLoc(loc);
  };

  return <CurrentContext.Provider
    value={{
      i:i,
      j:j,
      loc: loc,
      initBoard: initBoard,
      setCurrentCell: setCurrentCell,
      setInitBoard: setInitBoard
    }}
  >
    {props.children}
  </CurrentContext.Provider>
};

export default CurrentContext;