import { all, call, put, takeLatest } from 'redux-saga/effects'
import { getToken } from 'utils/auth'
import { routeList } from 'routes/routes'
import history from 'utils/history'
import {
  login,
  loginSuccess
} from 'reducers/loginReducer'
import { openModal } from 'reducers/messageReducer'
import {
  loginRequest,
} from 'apis/MAAAS010Api'


function* loginSaga(action: ReturnType<typeof login>) {
  try {
    //再認証チェック「既にログイン済みです」
    if (getToken()) {
      yield put(openModal("MAAAS010-006"))
      return
    }
    const data = yield call(loginRequest, action.payload)
    //強制変更パスワード時
    if (data.transitionSourceFlag === '0') {
      const params = { transitionSourceFlag: data.transitionSourceFlag, managerId: data.managerId };
      const path = {
        pathname: routeList.updatePassword,
        state: params,
      }
      history.push(path)
      return;
    }
    const token = data.tokenHead + ' ' + data.token
    yield put(loginSuccess({ token }))
  } catch (error) {
    yield put(openModal(error.message))
  }
}


export default function* userSaga() {
  yield all([
    takeLatest(login, loginSaga),
  ])
}
