import React, {useEffect} from 'react'
import { Button } from '@material-ui/core'
import ArrowBackIcon from '@material-ui/icons/ArrowBack'
import { routeList } from 'routes/routes'
import { SubTitle, Page } from 'components'
import Filter from './Filter'
import Results from './Results'
import { useSelector, useDispatch } from 'react-redux'
import { RootState } from 'reducers'
import { selectCompanyAccountList, setCompanyAccountSearchCondition, setSearchCondition } from 'reducers/companyReducer'
import { Link } from 'react-router-dom'
import magiStyles from 'css/magiStyle'
import history from 'utils/history'

const CompanyAccount = () => {
  //「企業ID」によると申込情報一覧を取得
  const dispatch = useDispatch()
  const state = history.location.state
  useEffect(() => {
    if (state) {
      const companyAccountValues = {
        clientId: state.clientId, //企業ID
        clientName: state.clientName, //企業名 
        fullName:'', // 操作者ID
        accountTypeSupervising: '0',
        accountTypeAdministrator: '0',
        accountTypeSemiManager: '0',
        accountTypeGeneralUser: '0',
        accountTypeLimitUser: '0',
        statusValid: '0',
        statusInvalid: '0',
      }
      dispatch(setSearchCondition(companyAccountValues))
    }
  }, [dispatch])

  const magiClasses = magiStyles()
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
