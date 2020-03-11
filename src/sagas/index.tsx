import { all, fork } from 'redux-saga/effects';
import userSaga from './loginSaga';
import accountSaga from './accountSaga';
import errorSaga from './errorSaga';
import applicationSaga from './applicationSaga';
import notificationSaga from './notificationSaga';
import operationLogSaga from './operationLogSaga';
import companySaga from './companySaga';
import globalMenuSaga from './globalMenuSaga';

export default function* rootSaga() {
  yield all([fork(userSaga),
  fork(accountSaga),
  fork(errorSaga),
  fork(applicationSaga),
  fork(notificationSaga),
  fork(operationLogSaga),
  fork(companySaga),
  fork(globalMenuSaga)]);
}
