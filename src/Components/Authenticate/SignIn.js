import AuthForm from './AuthForm';
import { Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const SignIn = ({ onSignIn, navToSignUp, isSignInPending, hasError }) => {
  const classes = useStyles();

  return (
    <AuthForm title='Sign In' onSubmit={onSignIn} isPending={isSignInPending} hasError={hasError}>
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
