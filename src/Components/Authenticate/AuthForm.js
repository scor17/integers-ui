import React, { useCallback, useState } from 'react';
import { FormGroup, FormControl, InputLabel, Input, Button, Typography, FormHelperText } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import validator from 'validator';

const Authenticate = ({ title, onSubmit, isPending, children, hasError }) => {
  const classes = useStyles();

  const [email, setEmail] = useState('');
  const [isEmailValid, setIsEmailValid] = useState(true);
  const [password, setPassword] = useState('');
  const [isPasswordValid, setIsPasswordValid] = useState(true);

  const isValid = useCallback((email, password) => {
    let isValid = true;
    if (!validator.isEmail(email)) {
      setIsEmailValid(false);
      isValid = false;
    } else {
      setIsEmailValid(true);
    }

    if (password.length < 3) {
      setIsPasswordValid(false);
      isValid = false;
    } else {
      setIsPasswordValid(true);
    }
    return isValid;
  }, [setIsEmailValid, setIsPasswordValid]);

  const handleSubmit = useCallback((e) => {
    e.preventDefault();
    if (isValid(email, password)) {
      onSubmit(email, password);
    }
  }, [email, password, onSubmit, isValid]);

  return (
    <form className={classes.form} onSubmit={handleSubmit}>
      <FormGroup>
        <Typography variant='h4' className={classes.heading}>{title}</Typography>
        {hasError && <Typography className={classes.error}>{`Failed to ${title.toLowerCase()}.`}</Typography>}
        <FormControl className={classes.control} error={!isEmailValid}>
          <InputLabel htmlFor='email-input'>Email address</InputLabel>
          <Input id='email-input' aria-describedby='email-validation' onChange={(e) => setEmail(e.target.value)} />
          {!isEmailValid && <FormHelperText id='email-validation'>Please enter a valid email.</FormHelperText>}
        </FormControl>
        <FormControl className={classes.control} error={!isPasswordValid}>
          <InputLabel htmlFor='password-input'>Password</InputLabel>
          <Input id='password-input' type='password' aria-describedby='password-validation' onChange={(e) => setPassword(e.target.value)} />
          {!isPasswordValid && <FormHelperText id='password-validation'>Password must be at least 3 characters.</FormHelperText>}
        </FormControl>
        <Button className={classes.button} type='submit' disabled={isPending}>Submit</Button>
        {children}
      </FormGroup>
    </form>
  );
};

export default Authenticate;

const useStyles = makeStyles({
  form: {
    width: 400,
    backgroundColor: '#d3d3d3',
    borderRadius: 30,
    padding: 30
  },
  heading: {
    color: 'black'
  },
  control: {
    paddingBottom: 20
  },
  button: {
    backgroundColor: '#3b5998',
    color: 'white',
    '&:hover': {
      backgroundColor: '#3b5998'
    },
    marginBottom: 30
  },
  error: {
    color: 'red'
  }
});
