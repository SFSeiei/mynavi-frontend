import {
  call,
  put,
  select,
  all,
  takeLatest,
  takeEvery,
} from 'redux-saga/effects'
import { magiContants } from 'utils/contants'
import { initialValues } from '../pages/MAAES010/formConfig'
import {
  initForNotiList,
  notificationInitialize,
  selectNotificationList,
  setNotiListSearchCondition,
  setNotiListResults,
  updateByPublic,
  updateByNoPublic,
  initialCreate,
  createNotification,
  setNotificationCreateValues,
  initialDetail,
  setNotiDetailValues,
  updateNotification,
} from 'reducers/notificationReducer'
import { openSnackbar } from 'reducers/messageReducer'
import {
  getNotiListSearchCondition,
  getNotificationCreateValues,
} from 'selectors'
import {
  initRequest,
  selectRequest,
  makePublicRequest,
  makeNoPublicRequest,
} from 'apis/MAAES010Api'
import {
  initialCreateRequest,
  createNotificationRequest,
} from 'apis/MAAES020Api'
import {
  initialDetailRequest,
  updateNotificationRequest,
} from 'apis/MAAES030Api'
import { MAAES030UpdateRequest } from 'types/MAAES030UpdateRequest'
import history from 'utils/history'
import { routeList } from 'routes/routes'

// お知らせ情報一覧
// 初期処理
function* initForNotiListSaga() {
  try {
    yield call(initRequest)
    history.push(routeList.notification)
  } catch (error) {
    yield put(openSnackbar(error.message));
  }
}
function* initialize(action: ReturnType<typeof notificationInitialize>) {
  try {
    const dataNewList = [] as any
    if (action.payload !== 'お知らせ情報一覧') {
      yield put(setNotiListResults(dataNewList));
      yield put(setNotiListSearchCondition(initialValues));
    }
  } catch (error) {
    yield put(openSnackbar(error.message))
  }
}
// 一覧を取得
function* selectNotificationListSaga(
  action: ReturnType<typeof selectNotificationList>
) {
  try {
    yield put(setNotiListResults([]))
    const data = yield call(selectRequest, action.payload)
    if (data.length === 0) {
      yield put(openSnackbar(magiContants.MESSAGECODE_RESULT_NULL))
    }
    yield put(setNotiListResults(data))
  } catch (error) {
    yield put(openSnackbar(error.message))
  }
}
// 公開更新
function* updateByPublicSaga(action: ReturnType<typeof updateByPublic>) {
  try {
    yield put(setNotiListResults([]))
    yield call(makePublicRequest, action.payload.data)
    // 再検索
    const searchCondition: ReturnType<
      typeof getNotiListSearchCondition
    > = yield select(getNotiListSearchCondition)
    const data = yield call(selectRequest, searchCondition)
    yield put(setNotiListResults(data))
    yield put(openSnackbar(action.payload.message))
  } catch (error) {
    yield put(openSnackbar(error.message))
  }
}
// 非公開更新
function* updateByNoPublicSaga(action: ReturnType<typeof updateByPublic>) {
  try {
    yield put(setNotiListResults([]))
    yield call(makeNoPublicRequest, action.payload.data)
    // 再検索
    const searchCondition: ReturnType<
      typeof getNotiListSearchCondition
    > = yield select(getNotiListSearchCondition)
    const data = yield call(selectRequest, searchCondition)
    yield put(setNotiListResults(data))
    yield put(openSnackbar(action.payload.message))
  } catch (error) {
    yield put(openSnackbar(error.message))
  }
}

// お知らせ情報登録
// 初期表示
function* initialCreateSaga(action: ReturnType<typeof initialCreate>) {
  try {
    const data = yield call(initialCreateRequest, action.payload)
    yield put(setNotificationCreateValues(data))
  } catch (error) {
    yield put(openSnackbar(error.message))
  }
}
// 登録
function* createNotificationSaga(
  action: ReturnType<typeof createNotification>
) {
  try {
    const notificationCreateValues: ReturnType<
      typeof getNotificationCreateValues
    > = yield select(getNotificationCreateValues)
    yield call(createNotificationRequest, notificationCreateValues)
    // 再検索
    const searchCondition: ReturnType<
      typeof getNotiListSearchCondition
    > = yield select(getNotiListSearchCondition)
    const data = yield call(selectRequest, searchCondition)
    yield put(setNotiListResults(data))
  } catch (error) {
    yield put(openSnackbar(error.message))
  }
}

// お知らせ情報編集
// 初期表示
function* initialDetailSaga(action: ReturnType<typeof initialDetail>) {
  try {
    const date = yield call(initialDetailRequest, action.payload)
    yield put(setNotiDetailValues(date))
  } catch (error) {
    yield put(openSnackbar(error.message))
  }
}
// 更新
function* updateNotificationSaga(
  action: ReturnType<typeof updateNotification>
) {
  try {
    const formData: MAAES030UpdateRequest = yield action.payload
    yield call(updateNotificationRequest, formData)
    // 再検索
    const searchCondition: ReturnType<
      typeof getNotiListSearchCondition
    > = yield select(getNotiListSearchCondition)
    const data = yield call(selectRequest, searchCondition)
    yield put(setNotiListResults(data))
  } catch (error) {
    yield put(openSnackbar(error.message))
  }
}

export default function* notificationSaga() {
  yield all([
    //　お知らせ情報一覧
    takeEvery(initForNotiList, initForNotiListSaga),
    takeEvery(notificationInitialize, initialize),
    takeLatest(selectNotificationList, selectNotificationListSaga),
    takeEvery(updateByPublic, updateByPublicSaga),
    takeEvery(updateByNoPublic, updateByNoPublicSaga),
    //　お知らせ情報登録
    takeEvery(initialCreate, initialCreateSaga),
    takeEvery(createNotification, createNotificationSaga),
    //　お知らせ情報編集
    takeEvery(initialDetail, initialDetailSaga),
    takeEvery(updateNotification, updateNotificationSaga),
  ])
}
