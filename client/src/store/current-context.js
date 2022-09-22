import React, { useState } from 'react';

const CurrentContext = React.createContext({
  i: 0,
  j: 0,
  setCurrentCell: () => {}
});

export const CurrentContextProvider = (props) => {
  const [i, seti] = useState(0);
  const [j, setj] = useState(0);

  const setCurrentCell = (loc, di, dj) => {
    let bi = Math.floor(loc / 3) * 3 + di;
    let bj = (loc % 3) * 3 + dj;

    seti(bi);
    setj(bj);
  };

  return <CurrentContext.Provider
    value={{
      i:i,
      j:j,
      setCurrentCell: setCurrentCell
    }}
  >
    {props.children}
  </CurrentContext.Provider>
};

export default CurrentContext;