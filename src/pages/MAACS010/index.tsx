import React from 'react';
import { Page, SubTitle } from 'components';
import Filter from './Filter'
import Results from './Results'
import { useSelector } from 'react-redux'
import { RootState } from 'reducers'
import { Link } from 'react-router-dom'
import { Button } from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add'
import { routeList } from 'routes/routes';
import magiStyles from 'css/magiStyle'

const Home = () => {
  const userInfo = useSelector((state: RootState) => state.globalMenu)
  const magiClasses = magiStyles();
  const companyList = useSelector((state: RootState) => state.company.dateList)
  return (
    <Page className={magiClasses.rootModify} title="企業情報管理 - マイナビ">
      <SubTitle>企業情報一覧</SubTitle>
      <Filter/>     
      <Button
        component={Link}
        to={routeList.companyCreate}
        variant='contained'
        color='primary'
        className={magiClasses.results}>
        <AddIcon />
        新規に登録する
      </Button>
      {companyList.length > 0 && (
        <Results
          userInfo={userInfo}
          className={magiClasses.results}
          companys={companyList}
        />
      )}
    </Page>
  );
};

export default Home;
