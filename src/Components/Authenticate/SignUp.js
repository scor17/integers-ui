import AuthForm from './AuthForm';
import { Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const SignUp = ({ onSignUp, navToSignIn, isSignUpPending, hasError }) => {
  const classes = useStyles();

  return (
    <AuthForm title='Sign Up' onSubmit={onSignUp} isPending={isSignUpPending} hasError={hasError}>
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
