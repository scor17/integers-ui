import './App.css';
import React, { useContext } from 'react';
import Authenticate from './Components/Authenticate';
import IntegersManager from './Components/IntegersManager';
import GlobalContext from './Store/GlobalContext';

const App = () => {
  const { globalState } = useContext(GlobalContext);
  return (
    <div className='App-body'>
      <p>Let's generate some integers!</p>
      {!globalState.isSignedIn && <Authenticate />}
      {globalState.isSignedIn && <IntegersManager />}
    </div>
  );
};

export default App;
