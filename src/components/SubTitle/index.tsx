import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Typography, Divider } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
  divider: {
    marginTop: theme.spacing(2),
  },
}));

const SubTitle: React.FC = ({ children }) => {
  const classes = useStyles();

  return (
    <>
      <Typography variant="h2" gutterBottom>
        {children}
      </Typography>
      <Divider className={classes.divider} />
    </>
  );
};

export default SubTitle;
