import { all, call, put, takeEvery, select } from 'redux-saga/effects'
import {magiContants} from 'utils/contants';
import { openSnackbar,openModal } from 'reducers/messageReducer'
import {
  applicationInitialize,
  searchApplicationList,
  setApplication,
  setAppSearch,
  setAppSearchList,
  setInitList,
  iinitList,
  setClientId,
  loginMagiClientId,
  setApplicationDetail,
  getApplicationDetail,
} from 'reducers/applicationReducer'
import {getAppricationSearch} from '../selectors'
import { searchRequest, searchInit, loginMagiClient } from 'apis/MAADS010Api'
import { detailRequest } from 'apis/MAADS020Api'
import { initialValues } from 'pages/MAADS010/formConfig'

//入力した検索条件を元に申込情報を検索し、一覧に表示する。
function* searchSaga(action: ReturnType<typeof searchApplicationList>) {
  try {
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
  const dataNewList = [] as any

  if (action.payload !== '申込情報一覧') {
    yield put(setApplication(dataNewList))
    yield put(setAppSearch(initialValues))
  }
}
//入力した検索条件を保存する
function* setSearchDate(action: ReturnType<typeof setAppSearchList>) {
  yield put(setAppSearch(action.payload))
}
//営業担当者情報を取得する
function* initSage(action: ReturnType<typeof setInitList>) {
  const data = yield call(searchInit, action.payload)
  yield put(setInitList(data))
}
//営業担当者情報を取得する
function* searchClientIdSaga() {
  try {
    const search = yield select(getAppricationSearch);
    const data = yield call(searchRequest, search)
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
  } catch (error) {
    yield put(openModal(error.message))
  }
}
//監視action、実行に対する方法
export default function* applicationaga() {
  yield all([
    takeEvery(searchApplicationList, searchSaga),
    takeEvery(applicationInitialize, initialize),
    takeEvery(setAppSearchList, setSearchDate),
    takeEvery(iinitList, initSage),
    takeEvery(setClientId, searchClientIdSaga),
    takeEvery(loginMagiClientId, loginMagiClientSaga),
    takeEvery(getApplicationDetail, detailSaga),
  ])
}
