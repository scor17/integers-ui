import React, { useCallback, useContext } from 'react';
import { Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import GlobalContext from '../../Store/GlobalContext';
import { nextInt } from '../../services';

const NextInt = () => {
  const { dispatch } = useContext(GlobalContext);
  const classes = useStyles();

  const getNextInt = useCallback(async () => {
    dispatch({ type: 'NEXT_REQUEST' });
    try {
      const res = await nextInt();
      dispatch({ type: 'NEXT_SUCCESS', value: res.current });
    } catch (err) {
      dispatch({ type: 'NEXT_FAIL' });
    }
  }, [dispatch]);

  return <Button className={classes.button} onClick={getNextInt}>Generate Next</Button>;
};

export default NextInt;

const useStyles = makeStyles({
  button: {
    backgroundColor: '#3b5998',
    color: 'white',
    '&:hover': {
      backgroundColor: '#3b5998'
    },
    marginBottom: 20
  }
});
