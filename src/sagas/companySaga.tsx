import { all, call, put, select, takeEvery,takeLatest} from 'redux-saga/effects'
import { magiContants } from 'utils/contants';
import { getCompanySearchDate,getCompanyAccountSearchCondition } from 'selectors'
import { routeList } from 'routes/routes'
import { openSnackbar } from 'reducers/messageReducer'
import history from 'utils/history'
import { initialSeachData } from 'pages/MAACS010/formConfig'
import {
  companyInitialize,
  searchCompanyList,
  setCompanyList,
  setCompanySearchDate,
  setCompanySearch,
  accountIssuance,
  temporaryPasswordIssuance,
  searchAdminDateList,
  setAdminDate,
  selectCompanyAccountList,
  setCompanyAccountSearchResults,
  setLoginID,
  createCompany,
  getCompanyDetail,
  setCompanyDetail,
  updateCompany,
  contractCheck,
  setContractCount,
  initializeCompany,
} from 'reducers/companyReducer';
import {
  searchRequest,
  accountIssuanceRequest,
  temporaryPasswordIssuanceRequest,
  findAdministrator,
  initializeRequest
} from 'apis/MAACS010Api';
import {selectRequest,SetPasswordRequest} from 'apis/MAACS040Api'
import {createCompanyRequest} from 'apis/MAACS020Api'
import {companyDetailRequest,companyUpdateRequest,contractCheckRequest,} from 'apis/MAACS030Api'
import { initialDetailValues } from '../pages/MAACS030/formConfig'

function* searchSaga(action: ReturnType<typeof searchCompanyList>) {
  try {
    const data = yield call(searchRequest, action.payload);
    if(data.length === 0){
      yield put(openSnackbar(magiContants.MESSAGECODE_RESULT_NULL))
    }
    yield put(setCompanyList(data));
  } catch (error) {
    yield put(openSnackbar(error.message));
  }
}
function* initialize(action: ReturnType<typeof companyInitialize>) {
  try {
    const dataNewList = [] as any
    if (action.payload !== '企業情報一覧') {
      yield put(setCompanyList(dataNewList));
      yield put(setCompanySearch(initialSeachData));
    }
  } catch (error) {
    yield put(openSnackbar(error.message))
  }
}
function* setSearchDate(action: ReturnType<typeof setCompanySearchDate>) {
      yield put(setCompanySearch(action.payload));
}

function* accountIssuanceSaga(action: ReturnType<typeof accountIssuance>) {
  try {
    yield call(accountIssuanceRequest, action.payload)
    const searchCondition: ReturnType<typeof getCompanySearchDate> = yield select(
      getCompanySearchDate
    )
    const data = yield call(searchRequest, searchCondition);
    yield put(setCompanyList(data));
    yield put(openSnackbar(magiContants.MESSAGECODE_MAACS010_002))
  } catch (error) {
    yield put(openSnackbar(error.message));
  }
}

function* temporaryPasswordIssuanceSaga(action: ReturnType<typeof temporaryPasswordIssuance>) {
  try {
    yield call(temporaryPasswordIssuanceRequest, action.payload)
    const searchCondition: ReturnType<typeof getCompanySearchDate> = yield select(
      getCompanySearchDate
    ) 
    const data = yield call(searchRequest, searchCondition);
    yield put(setCompanyList(data));
    yield put(openSnackbar(magiContants.MESSAGECODE_MAACS010_001))
  } catch (error) {
    yield put(openSnackbar(error.message));
  }
}
function* searchAdmin() {
  try {
    const data = yield call(findAdministrator);
    yield put(setAdminDate(data));
  } catch (error) {
    yield put(openSnackbar(error.message));
  }
}

function* selectCompanyAccountListSaga(action: ReturnType<typeof selectCompanyAccountList>) {
  try {
    const data = yield call(selectRequest, action.payload);
    yield put(setCompanyAccountSearchResults(data));
    if(data.length === 0){
      yield put(openSnackbar(magiContants.MESSAGECODE_RESULT_NULL))
    }
  } catch (error) {
    yield put(openSnackbar(error.message))
  }
}

function* setLoginIdSaga(action: ReturnType<typeof setLoginID>){
  try{
    yield put(setCompanyAccountSearchResults([]))
    yield call(SetPasswordRequest, action.payload);
    yield put(openSnackbar(magiContants.MESSAGECODE_TEMPPW_CREATE_SUCCESS))
    const searchCondition: ReturnType<typeof getCompanyAccountSearchCondition> = yield select(
      getCompanyAccountSearchCondition
    )
    const data = yield call(selectRequest, searchCondition);
    yield put(setCompanyAccountSearchResults(data));
  }catch (error) {
    
    yield put(openSnackbar(error.message))
  }
}

function* createCompanySaga(action: ReturnType<typeof createCompany>){
  try{
    yield call(createCompanyRequest,action.payload)
    history.push(routeList.company)
    yield put(openSnackbar(magiContants.MESSAGECODE_INSERT_SUCCESS))
    const searchCondition: ReturnType<typeof getCompanySearchDate> = yield select(
       getCompanySearchDate
    )
    const data = yield call(searchRequest, searchCondition);
    yield put(setCompanyList(data));
  }catch (error) {
    yield put(openSnackbar(error.message))
  }

}

function* companyDetailSaga(action: ReturnType<typeof getCompanyDetail>) {
  try {
    yield put(setCompanyDetail(initialDetailValues));
    const data  = yield call(companyDetailRequest, action.payload)
    yield put(setCompanyDetail(data));
    history.push(routeList.companyDetail)
 } catch (error) {
   yield put(openSnackbar(error))
 }
}

function* updateCompanySaga(action: ReturnType<typeof updateCompany>){
  try{
    yield call(companyUpdateRequest,action.payload)
    history.push(routeList.company)
    yield put(openSnackbar(magiContants.MESSAGECODE_UPDATE_SUCCESS))
    const searchCondition: ReturnType<typeof getCompanySearchDate> = yield select(
     getCompanySearchDate
   )
    const data = yield call(searchRequest, searchCondition);
    yield put(setCompanyList(data));

 }catch (error) {
   yield put(openSnackbar(error.message))
 }
}

function* contractCheckSaga(action: ReturnType<typeof contractCheck>){
  try{
    const data = yield call(contractCheckRequest,action.payload)
    yield put(setContractCount(data))
  }
  catch(error){
    yield put(openSnackbar(error.message))
  }
}
function* initCompany() {
  try {
    yield call(initializeRequest)
    history.push(routeList.company)
  } catch (error) {
  }
}
export default function* companyaga() {
  yield all([
    takeEvery(searchCompanyList, searchSaga),
    takeEvery(companyInitialize, initialize),
    takeEvery(setCompanySearchDate, setSearchDate),
    takeEvery(accountIssuance, accountIssuanceSaga),
    takeEvery(temporaryPasswordIssuance, temporaryPasswordIssuanceSaga),
    takeEvery(searchAdminDateList, searchAdmin),
    takeLatest(selectCompanyAccountList, selectCompanyAccountListSaga),
    takeLatest(setLoginID, setLoginIdSaga),
    takeLatest(createCompany, createCompanySaga),
    takeLatest(getCompanyDetail, companyDetailSaga),
    takeEvery(updateCompany, updateCompanySaga),
    takeLatest(contractCheck, contractCheckSaga),
    takeLatest(initializeCompany, initCompany),
  ])
}