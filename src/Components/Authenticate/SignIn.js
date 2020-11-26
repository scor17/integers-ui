import React, { useContext, useCallback } from 'react';
import AuthForm from './AuthForm';
import { Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import GlobalContext from '../../Store/GlobalContext';
import { signIn } from '../../services';

const SignIn = ({ navToSignUp }) => {
  const classes = useStyles();
  const { globalState, dispatch } = useContext(GlobalContext);

  const onSignIn = useCallback(async (email, password) => {
    dispatch({ type: 'SIGN_IN_REQUEST' });
    try {
      await signIn(email, password);
      dispatch({ type: 'SIGN_IN_SUCCESS' });
    } catch (err) {
      dispatch({ type: 'SIGN_IN_FAIL' });
    }
  }, [dispatch]);

  return (
    <AuthForm
      title='Sign In'
      onSubmit={onSignIn}
      isPending={globalState.signInPending}
      hasError={globalState.signInFailed}
    >
      <Button className={classes.navButton} onClick={navToSignUp}>Sign Up</Button>
    </AuthForm>
  );
};

export default SignIn;

const useStyles = makeStyles({
  navButton: {
    backgroundColor: '#2f2f2f',
    color: 'white'
  }
});
