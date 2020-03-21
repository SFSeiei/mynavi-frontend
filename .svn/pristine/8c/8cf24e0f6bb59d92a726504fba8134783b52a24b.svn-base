import {
  call,
  put,
  select,
  all,
  takeLatest,
  takeEvery,
} from 'redux-saga/effects'
import {
  accountInitialize,
  initializeAccount,
  getAccountDetail,
  setAccountDetail,
  getAccountCreateInit,
  setAccountCreateInit,
  selectAccountList,
  setAccountListSearchCondition,
  setAccountListResults,
  updateByValid,
  updateByInValid,
  inValidCheck,
  setinValidCheckCount,
  updateByPassword,
  fetchAccoutList,
  createAccount,
  setAccount,
  updateAccount,
  updatePassword,
  updatePasswordSuccess,
  getSysVersionNumberInit,
  setSysVersionNumberInit,
} from 'reducers/accountReducer'
import { openSnackbar, openModal } from 'reducers/messageReducer'
import { initialValues } from '../pages/MAABS020/formConfig'
import { getAccountListSearchCondition } from 'selectors'
import {
  selectRequest,
  updateByValidRequest,
  updateByInValidRequest,
  inValidCheckRequest,
  updateByPasswordRequest,
  fetchRequest,
  initializeRequest,
} from 'apis/MAABS020Api'
import {
  createInit,
  createRequest
} from 'apis/MAABS030Api'
import {
  updateRequest,
  detailRequest
} from 'apis/MAABS040Api'
import {
  loginSuccess,
} from 'reducers/loginReducer'
import {
  updatePasswordRequest,
  initSysVersionNumber
} from 'apis/MAABS010Api'
import { magiContants } from 'utils/contants';
import history from 'utils/history'
import { routeList } from 'routes/routes'

function* detailSaga(action: ReturnType<typeof getAccountDetail>) {
  try {
    const data = yield call(detailRequest, action.payload)
    yield put(setAccountDetail(data));
    const path = {
      pathname: routeList.accountEdit,
      state: action.payload,
    }
    history.push(path)
  } catch (error) {
    yield put(openModal(error.message));
  }
}

function* creatSagaInit() {
  try {
    const data = yield call(createInit)
    yield put(setAccountCreateInit(data));
    history.push(routeList.accountCreate)
  } catch (error) {
    yield put(openSnackbar(error.message));
  }
}

function* selectAccoutListSaga(action: ReturnType<typeof selectAccountList>) {
  try {
    yield put(setAccountListResults([]));
    const data = yield call(selectRequest, action.payload);
    if(data.length === 0){
      yield put(openSnackbar(magiContants.MESSAGECODE_RESULT_NULL))
    }
    yield put(setAccountListResults(data));
  } catch (error) {
    yield put(openSnackbar(error.message));
  }
}

function* updateByValidSaga(action: ReturnType<typeof updateByValid>) {
  try {
    yield call(updateByValidRequest, action.payload.data);
    yield put(openSnackbar(magiContants.MESSAGECODE_UPDATE_SUCCESS))
    const searchCondition: ReturnType<typeof getAccountListSearchCondition> = yield select(
      getAccountListSearchCondition
    )
    yield put(setAccountListResults([]));
    const data = yield call(selectRequest, searchCondition);
    if(data.length === 0){
      yield put(openSnackbar(magiContants.MESSAGECODE_RESULT_NULL))
    } 
    yield put(setAccountListResults(data));
  } catch (error) {
    yield put(openModal(error.message));
  }
}

function* updateByInValidSaga(action: ReturnType<typeof updateByInValid>) {
  try {
    yield call(updateByInValidRequest, action.payload.data);
    yield put(openSnackbar(magiContants.MESSAGECODE_UPDATE_SUCCESS))
    const searchCondition: ReturnType<typeof getAccountListSearchCondition> = yield select(
      getAccountListSearchCondition
    )
    yield put(setAccountListResults([]));
    const data = yield call(selectRequest, searchCondition);
    if(data.length === 0){
      yield put(openSnackbar(magiContants.MESSAGECODE_RESULT_NULL))
    }
    yield put(setAccountListResults(data));
  } catch (error) {
    yield put(openModal(error.message));
  }
}

function* inValidCheckSaga(action: ReturnType<typeof inValidCheck>){
  try{
    const data = yield call(inValidCheckRequest,action.payload.data)
    yield put(setinValidCheckCount(data))
  }
  catch(error){
    yield put(openModal(error.message))
  }
}

function* updateByPasswordSaga(action: ReturnType<typeof updateByPassword>) {
  try {
    yield call(updateByPasswordRequest, action.payload.data);
    yield put(openSnackbar(magiContants.MESSAGECODE_UPDATE_SUCCESS))
    const searchCondition: ReturnType<typeof getAccountListSearchCondition> = yield select(
      getAccountListSearchCondition
    )
    yield put(setAccountListResults([]));
    const data = yield call(selectRequest, searchCondition);
    if(data.length === 0){
      yield put(openSnackbar(magiContants.MESSAGECODE_RESULT_NULL))
    }
    yield put(setAccountListResults(data));
  } catch (error) {
    yield put(openSnackbar(error.message));
  }
}

function* fetchSaga() {
  try {
    const data = yield call(fetchRequest)
    yield put(setAccount(data))
  } catch (error) {
    yield put(openSnackbar(error))
  }
}

function* createSaga(action: ReturnType<typeof createAccount>) {
  try {
    yield call(createRequest, action.payload)
    history.push(routeList.account)
    yield put(openSnackbar(magiContants.MESSAGECODE_INSERT_SUCCESS))
    const searchCondition: ReturnType<typeof getAccountListSearchCondition> = yield select(
      getAccountListSearchCondition
    )
    const result = yield call(selectRequest, searchCondition);
    yield put(setAccountListResults(result));
  } catch (error) {
    alert("err:"+error.message)
    yield put(openModal(error.message))
  }
}

function* updateSaga(action: ReturnType<typeof updateAccount>) {
  try {
    yield call(updateRequest, action.payload)
    history.push(routeList.account)
    yield put(openSnackbar(magiContants.MESSAGECODE_UPDATE_SUCCESS))
    const searchCondition: ReturnType<typeof getAccountListSearchCondition> = yield select(
      getAccountListSearchCondition
    )
    yield put(setAccountListResults([]));
    const result = yield call(selectRequest, searchCondition);
    if(result.length === 0){
      yield put(openSnackbar(magiContants.MESSAGECODE_RESULT_NULL))
    }
    yield put(setAccountListResults(result));
  } catch (error) {
    yield put(openModal(error.message))
  }
}

function* updatePasswordSaga(action: ReturnType<typeof updatePassword>) {
  try {
    const data = yield call(updatePasswordRequest, action.payload)
    //0：強制変更時、JWTでtokenを生成する
    if (data.transitionSourceFlag === "0") {
      const token = data.tokenHead + ' ' + data.token
      yield put(loginSuccess({ token }))
    }
    yield put(updatePasswordSuccess())
    yield put(openSnackbar(magiContants.MESSAGECODE_UPDATE_SUCCESS))
  } catch (error) {
    yield put(openModal(error.message))
  }
}

function* initialize(action: ReturnType<typeof accountInitialize>) {
  try {
    const dataNewList = [] as any
    if (action.payload !== 'アカウント一覧') {
      yield put(setAccountListResults(dataNewList));
      yield put(setAccountListSearchCondition(initialValues));
    }
  } catch (error) {
    yield put(openSnackbar(error.message))
  }
}
function* initAccount() {
  try {
    yield call(initializeRequest)
    history.push(routeList.account)
  } catch (error) {
    yield put(openSnackbar(error.message));
  }
}
function* getSysVersionNumberSage(){
  try{
    const data = yield call(initSysVersionNumber)
    yield put(setSysVersionNumberInit(data))
  }
  catch(error){
    yield put(openModal(error.message))
  }
}
export default function* accountSaga() {
  yield all([
    takeEvery(getAccountDetail, detailSaga),
    takeEvery(getAccountCreateInit, creatSagaInit),
    takeEvery(updateAccount, updateSaga),
    takeLatest(selectAccountList, selectAccoutListSaga),
    takeEvery(updateByValid, updateByValidSaga),
    takeEvery(updateByInValid, updateByInValidSaga),
    takeEvery(inValidCheck, inValidCheckSaga),
    takeEvery(updateByPassword, updateByPasswordSaga),
    takeLatest(fetchAccoutList, fetchSaga),
    takeEvery(createAccount, createSaga),
    takeEvery(updatePassword, updatePasswordSaga),
    takeLatest(initializeAccount, initAccount),
    takeEvery(accountInitialize, initialize),
    takeEvery(getSysVersionNumberInit, getSysVersionNumberSage),
  ])
}
