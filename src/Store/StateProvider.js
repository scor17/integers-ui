import React from 'react';
import useGlobalState from './useGlobalState';
import GlobalContext from './GlobalContext';

const StateProvider = ({ children }) => {
  return (
    <GlobalContext.Provider value={useGlobalState()}>
      {children}
    </GlobalContext.Provider>
  );
};

export default StateProvider;
