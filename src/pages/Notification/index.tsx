import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

import { Page, SubTitle } from 'components';

const useStyles = makeStyles(theme => ({
  root: {
    padding: theme.spacing(3),
  },
}));

const Notification = () => {
  const classes = useStyles();
  return (
    <Page className={classes.root} title="お知らせ情報管理 - マイナビ">
      <SubTitle>お知らせ情報管理</SubTitle>
    </Page>
  );
};

export default Notification;
