import React, { useContext, useCallback } from 'react';
import AuthForm from './AuthForm';
import { Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import GlobalContext from '../../Store/GlobalContext';
import { signUp } from '../../services';

const SignUp = ({ navToSignIn }) => {
  const classes = useStyles();
  const { globalState, dispatch } = useContext(GlobalContext);

  const onSignUp = useCallback(async (email, password) => {
    dispatch({ type: 'SIGN_UP_REQUEST' });
    try {
      await signUp(email, password);
      dispatch({ type: 'SIGN_UP_SUCCESS' });
    } catch (err) {
      dispatch({ type: 'SIGN_UP_FAIL' });
    }
  }, [dispatch]);

  return (
    <AuthForm
      title='Sign Up'
      onSubmit={onSignUp}
      isPending={globalState.signUpPending}
      hasError={globalState.signUpFailed}
    >
      <Button className={classes.navButton} onClick={navToSignIn}>Sign In</Button>
    </AuthForm>
  );
};

export default SignUp;

const useStyles = makeStyles({
  navButton: {
    backgroundColor: '#2f2f2f',
    color: 'white'
  }
});
