import React from 'react';
import { Card, Grid, makeStyles } from '@material-ui/core';
import Skeleton from '@material-ui/lab/Skeleton';

import { rangeGenerator } from 'shared/utils';

const useStyles = makeStyles(() => ({
  marginBottom20: {
    marginBottom: '20px',
  },
  contentContainer: {
    padding: '20px',
  },
}));

interface Props {
  repeat?: number;
}

const Loader = ({ repeat = 1 }: Props) => {
  const classes = useStyles();

  return (
    <>
      {[...rangeGenerator(0, repeat)].map(() => (
        <Card variant="outlined" className={classes.marginBottom20}>
          <Grid container className={classes.contentContainer}>
            <Grid item xs={3}>
              <Skeleton variant="rect" width={150} height={150} />
            </Grid>
            <Grid item xs={9}>
              <Grid item xs={12} className={classes.marginBottom20}>
                <Skeleton variant="rect" width="100%" height={30} />
              </Grid>
              <Grid item xs={12} className={classes.marginBottom20}>
                <Skeleton variant="rect" width="40%" height={30} />
              </Grid>
              <Grid item xs={12} className={classes.marginBottom20}>
                <Skeleton variant="rect" width="30%" height={30} />
              </Grid>
            </Grid>
          </Grid>
        </Card>
      ))}
    </>
  );
};

export default Loader;
