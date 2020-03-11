import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

import { Page, SubTitle } from 'components';

const useStyles = makeStyles(theme => ({
  root: {
    padding: theme.spacing(3),
  },
}));

const Home = () => {
  const classes = useStyles();
  return (
    <Page className={classes.root} title="ホームページ - マイナビ">
      <SubTitle>ホームページ</SubTitle>
    </Page>
  );
};
export default Home;
