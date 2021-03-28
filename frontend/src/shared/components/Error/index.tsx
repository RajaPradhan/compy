import React from 'react';
import { makeStyles, Typography } from '@material-ui/core';

const useStyles = makeStyles(() => ({
  errorContainer: {
    width: '100%',
    height: '100px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
}));

interface Props {
  message: string;
}

const Error = ({ message }: Props) => {
  const classes = useStyles();

  return (
    <div className={classes.errorContainer}>
      <Typography variant="h6">{message}</Typography>
    </div>
  );
};

export default Error;
