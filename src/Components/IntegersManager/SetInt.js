import React, { useCallback, useContext, useState } from 'react';
import { Input, Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import GlobalContext from '../../Store/GlobalContext';
import { setInt } from '../../services';

const SetInt = () => {
  const { dispatch } = useContext(GlobalContext);
  const [newValue, setNewValue] = useState();
  const classes = useStyles();

  const setCurrentInt = useCallback(async () => {
    dispatch({ type: 'UPDATE_REQUEST' });
    try {
      const parsed = parseInt(newValue, 10);
      if (!parsed) {
        dispatch({ type: 'UPDATE_FAIL' });
        return;
      }
      const res = await setInt(parsed);
      dispatch({ type: 'UPDATE_SUCCESS', value: res.data.attributes.current });
    } catch (err) {
      dispatch({ type: 'UPDATE_FAIL' });
    }
  }, [dispatch, newValue]);

  return (
    <div className={classes.currentBlock}>
      <Button className={classes.button} onClick={setCurrentInt}>Set Current</Button>
      <Input type='number' onChange={(e) => { setNewValue(e.target.value); }} />
    </div>
  );
};

export default SetInt;

const useStyles = makeStyles({
  currentBlock: {
    display: 'flex'
  },
  button: {
    backgroundColor: '#3b5998',
    color: 'white',
    '&:hover': {
      backgroundColor: '#3b5998'
    },
    marginRight: 15
  }
});
