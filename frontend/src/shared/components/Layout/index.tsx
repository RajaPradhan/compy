import React, { ReactNode } from 'react';
import { Grid, makeStyles } from '@material-ui/core';

import Header from '../Header';

const useStyles = makeStyles(() => ({
  mainContainer: {
    display: 'flex',
  },
  contentContainer: {
    display: 'flex',
    padding: '0 200px',
  },
}));

interface Props {
  children: ReactNode;
}

const Layout = ({ children }: Props) => {
  const classes = useStyles();

  return (
    <Grid container className={classes.mainContainer}>
      <Grid item xs={12}>
        <Header />
      </Grid>
      <Grid item xs={12} className={classes.contentContainer}>
        {children}
      </Grid>
    </Grid>
  );
};

export default Layout;
