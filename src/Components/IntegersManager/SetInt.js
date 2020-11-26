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
      const res = await setInt(parseInt(newValue, 10));
      dispatch({ type: 'UPDATE_SUCCESS', value: res.current });
    } catch (err) {
      dispatch({ type: 'UPDATE_FAIL' });
    }
  }, [dispatch, newValue]);

  return (
    <div className={classes.currentBlock}>
      <Button onClick={setCurrentInt}>Set Current</Button>
      <Input type='number' onChange={(e) => { setNewValue(e.target.value); }} />
    </div>
  );
};

export default SetInt;

const useStyles = makeStyles({
  currentBlock: {
    display: 'flex'
  }
});
