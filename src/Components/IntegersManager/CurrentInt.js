import React, { useCallback, useContext, useEffect } from 'react';
import { Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import GlobalContext from '../../Store/GlobalContext';
import { getInt } from '../../services';

const CurrentInt = () => {
  const { globalState, dispatch } = useContext(GlobalContext);
  const classes = useStyles();

  const getCurrentInt = useCallback(async () => {
    dispatch({ type: 'CURRENT_REQUEST' });
    try {
      const res = await getInt();
      dispatch({ type: 'CURRENT_SUCCESS', value: res.data.attributes.current });
    } catch (err) {
      dispatch({ type: 'CURRENT_FAIL' });
    }
  }, [dispatch]);

  useEffect(() => { getCurrentInt(); }, [getCurrentInt]);

  return (
    <div className={classes.currentBlock}>
      <Typography className={classes.text}>Current Integer:</Typography>
      <Typography>{globalState.currentInt}</Typography>
    </div>
  );
};

export default CurrentInt;

const useStyles = makeStyles({
  currentBlock: {
    display: 'flex',
    paddingBottom: 20
  },
  text: {
    paddingRight: 20
  }
});
