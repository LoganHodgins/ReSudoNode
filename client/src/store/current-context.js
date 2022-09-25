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
  const [initBoard, setInitBoard] = useState();

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