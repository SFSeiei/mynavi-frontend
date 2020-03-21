import React from 'react'
import { SubTitle, Page } from 'components'
import Filter from './Filter'
import Results from './Results'
import { useSelector } from 'react-redux'
import { RootState } from 'reducers'
import magiStyles from 'css/magiStyle'

const Home = () => {
  const magiClasses = magiStyles()
  // 検索結果を取得
  const applicationList = useSelector(
    (state: RootState) => state.application.dateList
  )
  return (
    <Page className={magiClasses.rootModify} title='申込情報管理 - マイナビ'>
      {/* タイトル */}
      <SubTitle>申込情報一覧</SubTitle>
      {/* 検索条件 ページ */}
      <Filter />
      {/* 検索結果の頁画面を表示 */}
      {applicationList.length > 0 && (
        <Results className={magiClasses.results} applications={applicationList} />
      )}
    </Page>
  )
}

export default Home
