import React, { useCallback, useContext } from 'react';
import { Button } from '@material-ui/core';
import GlobalContext from '../../Store/GlobalContext';
import { nextInt } from '../../services';

const NextInt = () => {
  const { dispatch } = useContext(GlobalContext);

  const getNextInt = useCallback(async () => {
    dispatch({ type: 'NEXT_REQUEST' });
    try {
      const res = await nextInt();
      dispatch({ type: 'NEXT_SUCCESS', value: res.current });
    } catch (err) {
      dispatch({ type: 'NEXT_FAIL' });
    }
  }, [dispatch]);

  return <Button onClick={getNextInt}>Generate Next</Button>;
};

export default NextInt;
