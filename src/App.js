import './App.css';
import React, { useReducer, useCallback } from 'react';
import { authReducer, INITIAL_STATE as AUTH_INITIAL } from './Reducers/authReducer';
import Authenticate from './Components/Authenticate';
import IntegersManager from './Components/IntegersManager';
import { signUp, signIn } from './services';

const App = () => {
  const [authState, authDispatch] = useReducer(authReducer, AUTH_INITIAL);
  const onSignUp = useCallback(async (email, password) => {
    authDispatch('AUTH_REQUEST');
    try {
      await signUp(email, password);
      authDispatch('AUTH_SUCCESS');
    } catch (err) {
      authDispatch('AUTH_FAIL');
    }
  }, [authDispatch]);

  const onSignIn = useCallback(async (email, password) => {
    authDispatch('AUTH_REQUEST');
    try {
      await signIn(email, password);
      authDispatch('AUTH_SUCCESS');
    } catch (err) {
      authDispatch('AUTH_FAIL');
    }
  }, [authDispatch]);

  const { isSignedIn, pending, failed } = authState;
  return (
    <div className='App-body'>
      <p>Let's generate some integers!</p>
      {!isSignedIn && (
        <Authenticate
          onSignUp={onSignUp}
          onSignIn={onSignIn}
          isRequestFailed={failed}
          isRequestPending={pending}
        />
      )}
      {isSignedIn && <IntegersManager />}
    </div>
  );
};

export default App;
