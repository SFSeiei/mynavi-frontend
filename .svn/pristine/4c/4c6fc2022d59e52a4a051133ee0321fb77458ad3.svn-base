import { call, put, all, takeEvery } from 'redux-saga/effects';

import { removeError, setError, sendError } from 'reducers/errorReducer';
import { sendRequest } from 'apis/errorApi';

function* sendSaga(action: ReturnType<typeof sendError>) {
  try {
    yield call(sendRequest, action.payload);
    yield put(removeError());
  } catch (error) {
    yield put(setError(action.payload));
  }
}

export default function* errorSaga() {
  yield all([takeEvery(sendError, sendSaga)]);
}
