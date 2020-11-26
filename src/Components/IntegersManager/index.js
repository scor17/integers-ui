import { Card } from '@material-ui/core';
import CurrentInt from './CurrentInt';
import NextInt from './NextInt';
import SetInt from './SetInt';
import { makeStyles } from '@material-ui/core/styles';

const IntegersManager = () => {
  const classes = useStyles();
  return (
    <Card className={classes.container}>
      <CurrentInt />
      <NextInt />
      <SetInt />
    </Card>
  );
};

export default IntegersManager;

const useStyles = makeStyles({
  container: {
    width: 350,
    height: 200,
    padding: 30
  }
});
