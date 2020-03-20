import { all, call, put,takeEvery, select } from 'redux-saga/effects'
import {getOperationLogSearch} from '../selectors'
import { openSnackbar } from 'reducers/messageReducer'
import {
  searchOperationLogList,
  setOperationLog,
  setOperationLogPrim,
  selectOperationLog,
  setOperationLogSearchDate,
  setSuggestList,
  searchSuggestList,
  setClientData,
} from 'reducers/operationLogReducer';
import {
  searchRequest,
  outputCsvRequest,
  searchInit
} from 'apis/MAAFS010Api';
import { getOperationLogList } from 'selectors';
import { magiContants } from 'utils/contants';

function* searchSaga(action: ReturnType<typeof searchOperationLogList>) {
  try {
    yield put(setOperationLog([]));
    const data = yield call(searchRequest, action.payload);
    if(data.length === 0){
      yield put(openSnackbar(magiContants.MESSAGECODE_RESULT_NULL))
    }
    yield put(setOperationLog(data));
  } catch (error) {
    yield put(openSnackbar(error.message));
  }
}

function* setSearchDate(action: ReturnType<typeof setOperationLogSearchDate>) {
  yield put(setOperationLogPrim(action.payload));
}

function* initSaga() {
  const data = yield call(searchInit);
  yield put(setSuggestList(data));
}

function* outputCsv(action: ReturnType<typeof selectOperationLog>) {
  try {
    const operationLogList: ReturnType<typeof  getOperationLogList> = yield select(
      getOperationLogList);
   const data = yield call(outputCsvRequest, operationLogList);
   if(data === null){
     yield put(openSnackbar(magiContants.MESSAGECODE_CSV_SUCCESS))
   }
  } catch (error) {
    yield put(openSnackbar(error.message));
  }
}
//初期処理企業情報を取得する
function* searchClientIdSaga() {
  try {
    yield put(setOperationLog([]))
    const search = yield select(getOperationLogSearch);
    const data = yield call(searchRequest, search)
    if(data.length === 0){
      yield put(openSnackbar(magiContants.MESSAGECODE_RESULT_NULL))
    }
    yield put(setOperationLog(data))
  } catch (error) {
    yield put(openSnackbar(error.message))
  }
}
export default function* operationLogSaga() {
  yield all([
    takeEvery(setClientData, searchClientIdSaga),
    takeEvery(searchOperationLogList, searchSaga),
    takeEvery(setOperationLogSearchDate,setSearchDate),
    takeEvery(searchSuggestList,initSaga),
    takeEvery(selectOperationLog,outputCsv),
  ])
}