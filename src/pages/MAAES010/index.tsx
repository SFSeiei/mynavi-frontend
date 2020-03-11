import React, { useEffect } from 'react'
import { Button } from '@material-ui/core'
import AddIcon from '@material-ui/icons/Add'
import { Link } from 'react-router-dom'

import { Page, SubTitle } from 'components'
import Filter from './Filter'
import Results from './Results'
import { useSelector, useDispatch } from 'react-redux'
import { RootState } from 'reducers'
import {
  initForNotiList,
  selectNotificationList,
  setNotiListSearchCondition,
} from 'reducers/notificationReducer'
import { routeList } from 'routes/routes'
import magiStyles from 'css/magiStyle'

const MAAES010 = () => {
  const magiClasses = magiStyles()
  const dispatch = useDispatch()
  const notiList = useSelector(
    (state: RootState) => state.notification.notiListResults
  )
  useEffect(() => {
    dispatch(initForNotiList())
  }, [dispatch])
  const handleFilter = (values: any) => {
    dispatch(setNotiListSearchCondition(values))
    dispatch(selectNotificationList(values))
  }

  return (
    <Page
      className={magiClasses.rootModify}
      title='お知らせ情報管理 - マイナビ'>
      <SubTitle>お知らせ情報管理</SubTitle>
      <Filter onFilter={handleFilter} />
      <Button
        component={Link}
        to={routeList.notificationCreate}
        variant='contained'
        color='primary'
        className={magiClasses.results}>
        <AddIcon />
        新規に登録する
      </Button>
      {notiList.length > 0 && (
        <Results className={magiClasses.results} notifications={notiList} />
      )}
    </Page>
  )
}

export default MAAES010
