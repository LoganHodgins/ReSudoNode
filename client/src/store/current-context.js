import React, { useState } from 'react';

const CurrentContext = React.createContext({
  i: 0,
  j: 0,
  loc: 0,
  setCurrentCell: () => {}
});

export const CurrentContextProvider = (props) => {
  const [i, seti] = useState(0);
  const [j, setj] = useState(0);
  const [loc, setLoc] = useState(0);

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
      setCurrentCell: setCurrentCell
    }}
  >
    {props.children}
  </CurrentContext.Provider>
};

export default CurrentContext;