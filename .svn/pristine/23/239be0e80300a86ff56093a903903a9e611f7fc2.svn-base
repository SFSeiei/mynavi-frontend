import { all, call, put, takeEvery, select } from 'redux-saga/effects'
import {magiContants} from 'utils/contants';
import history from 'utils/history'
import { openSnackbar,openModal } from 'reducers/messageReducer'
import {
  initialApplication,
  applicationInitialize,
  searchApplicationList,
  setApplication,
  setAppSearch,
  setAppSearchList,
  setClientId,
  loginMagiClientId,
  setApplicationDetail,
  getApplicationDetail,
} from 'reducers/applicationReducer'
import {getAppricationSearch} from '../selectors'
import { searchRequest, loginMagiClient, searchInit } from 'apis/MAADS010Api'
import { detailRequest } from 'apis/MAADS020Api'
import { initialValues } from 'pages/MAADS010/formConfig'
import { routeList } from 'routes/routes'

//入力した検索条件を元に申込情報を検索し、一覧に表示する。
function* searchSaga(action: ReturnType<typeof searchApplicationList>) {
  try {
    yield put(setApplication([]))
    const data = yield call(searchRequest, action.payload)
    if(data.length === 0){
      yield put(openSnackbar(magiContants.MESSAGECODE_RESULT_NULL))
    }
    yield put(setApplication(data))
  } catch (error) {
    yield put(openSnackbar(error.message))
  }
}
//頁面初期化表示
function* initialize(action: ReturnType<typeof applicationInitialize>) {
  if (action.payload !== '申込情報一覧') {
    yield put(setApplication([]))
    yield put(setAppSearch(initialValues))
  }
}
//初期画面チェック
function* initApplication() {
  try {
    yield call(searchInit)
    history.push(routeList.application)
  } catch (error) {
    yield put(openSnackbar(error.message));
  }
}
//入力した検索条件を保存する
function* setSearchDate(action: ReturnType<typeof setAppSearchList>) {
  yield put(setAppSearch(action.payload))
}
//営業担当者情報を取得する
function* searchClientIdSaga() {
  try {
    yield put(setApplication([]))
    const search = yield select(getAppricationSearch);
    const data = yield call(searchRequest, search)
    if(data.length === 0){
      yield put(openSnackbar(magiContants.MESSAGECODE_RESULT_NULL))
    }
    yield put(setApplication(data))
  } catch (error) {
    yield put(openSnackbar(error.message))
  }
}
//選択した企業へログインするか確認をする
function* loginMagiClientSaga() {
  yield call(loginMagiClient)
}
function* detailSaga(action: ReturnType<typeof getApplicationDetail>) {
  try {
    const data  = yield call(detailRequest, action.payload)
    yield put(setApplicationDetail(data));
    const path = {
      pathname: routeList.applicationDetail,
      state: action.payload,
    }
    history.push(path)
  } catch (error) {
    yield put(openModal(error.message))
  }
}
//監視action、実行に対する方法
export default function* applicationaga() {
  yield all([
    takeEvery(initialApplication, initApplication),
    takeEvery(searchApplicationList, searchSaga),
    takeEvery(applicationInitialize, initialize),
    takeEvery(setAppSearchList, setSearchDate),
    takeEvery(setClientId, searchClientIdSaga),
    takeEvery(loginMagiClientId, loginMagiClientSaga),
    takeEvery(getApplicationDetail, detailSaga),
  ])
}
