import React from 'react'
import { Link } from 'react-router-dom'
import { Button } from '@material-ui/core'
import AddIcon from '@material-ui/icons/Add'

import { SubTitle, Page } from 'components'
import Filter from './Filter'
import Results from './Results'
import { useSelector, useDispatch } from 'react-redux'
import { RootState } from 'reducers'
import { routeList } from 'routes/routes'
import { selectAccountList , setAccountListSearchCondition } from 'reducers/accountReducer';
import magiStyles from 'css/magiStyle'



const Home = () => {
  const magiClasses = magiStyles()
  const dispatch = useDispatch()
  const accountList = useSelector((state: RootState) => state.account.accountListResults)

  const handleFilter = (values: any) => {
   // setQuery(values)
    dispatch(setAccountListSearchCondition(values))
    dispatch(selectAccountList(values))
  }

  return (
    <Page className={magiClasses.rootModify} title='社内アカウント一覧 - マイナビ'>
      <SubTitle>社内アカウント一覧</SubTitle>
      <Filter onFilter={handleFilter} />
      <Button
        component={Link}
        to={routeList.accountCreate}
        variant='contained'
        color='primary'
        className={magiClasses.results}>
        <AddIcon />
        新規に登録する
      </Button>
      {accountList.length > 0 && (
        <Results
          className={magiClasses.results}
          accounts={accountList}
        />
      )}
    </Page>
  )
}

export default Home
