import { all, call, put, takeLatest, takeEvery } from 'redux-saga/effects'
import {
  signout,
  signoutSuccess,
  getUserInfo,
  setUserInfo
} from 'reducers/globalMenuReducer'
import { openSnackbar } from 'reducers/messageReducer'
import {
  logoutRequest,
  getUserInfoRequest,
} from 'apis/MAAGS010Api'


function* signoutSaga(action: ReturnType<typeof signout>) {
  try {
    yield call(logoutRequest, action.payload)
    yield put(signoutSuccess())
  } catch (error) {
    yield put(openSnackbar(error))
  }
}

function* infoSaga() {
  try {
    const data = yield call(getUserInfoRequest)
    yield put(setUserInfo(data))
  } catch (error) {
    yield put(openSnackbar(error))
  }
}


export default function* userSaga() {
  yield all([
    takeEvery(signout, signoutSaga),
    takeLatest(getUserInfo, infoSaga)
  ])
}
