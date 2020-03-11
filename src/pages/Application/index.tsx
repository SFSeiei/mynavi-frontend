import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

import { Page, SubTitle } from 'components';

const useStyles = makeStyles(theme => ({
  root: {
    padding: theme.spacing(3),
  },
}));

const Application = () => {
  const classes = useStyles();
  return (
    <Page className={classes.root} title="申込情報管理 - マイナビ">
      <SubTitle>申込情報管理</SubTitle>
    </Page>
  );
};

export default Application;
