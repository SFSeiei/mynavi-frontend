import React from 'react'
import { Button } from '@material-ui/core'
import ArrowBackIcon from '@material-ui/icons/ArrowBack'
import { routeList } from 'routes/routes'
import { SubTitle, Page } from 'components'
import Filter from './Filter'
import Results from './Results'
import { useSelector, useDispatch } from 'react-redux'
import { RootState } from 'reducers'
import { selectCompanyAccountList, setCompanyAccountSearchCondition } from 'reducers/companyReducer'
import { Link } from 'react-router-dom'
import magiStyles from 'css/magiStyle'

const CompanyAccount = () => {
  const magiClasses = magiStyles()
  const dispatch = useDispatch()
  const resultList = useSelector((state: RootState) => state.company.companyAccountSearchResults)

  const handleFilter = (values: any) => {
    dispatch(setCompanyAccountSearchCondition(values))
    dispatch(selectCompanyAccountList(values))
  }

  return (
    <Page className={magiClasses.rootModify} title="企業アカウント一覧 - マイナビ">
      <SubTitle>企業アカウント一覧</SubTitle>
      <Button
        component={Link}
        to={routeList.company}
        variant='contained'
        color='primary'
        className={magiClasses.back}>
        <ArrowBackIcon />
        一覧に戻る
      </Button>
      <Filter onFilter={handleFilter} />
      {resultList.length > 0 && (
        <Results
          className={magiClasses.results}
          results={resultList}
        />
      )}
    </Page>
  );
};

export default CompanyAccount;
