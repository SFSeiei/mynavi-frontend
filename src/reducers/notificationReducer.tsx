import { createSlice, PayloadAction } from 'redux-starter-kit'
import { initialValues } from '../pages/MAAES010/formConfig'
import { initialValues as initialValuesForCreate } from '../pages/MAAES020/formConfig'
import { initialValues as initialValuesForDetail } from '../pages/MAAES030/formConfig'
import { MAAES010QueryRequest } from 'types/MAAES010QueryRequest'
import { MAAES010IdRequest } from 'types/MAAES010IdRequest'
import { MAAES020CreateRequest } from 'types/MAAES020CreateRequest'
import { MAAES030UpdateRequest } from 'types/MAAES030UpdateRequest'

export interface EditInformationRequest {
  [key: string]: number
  // お知らせID
  listNewsId: number
}

// お知らせ情報一覧検索結果
export interface Notification {
  [key: string]: string | number
  // 分類
  listCategory: string
  // タイトル
  listSubject: string
  // 公開期間
  listPublicDate: string
  // 公開対象
  listPublicTarget: string
  // 公開状態
  listPublicFlag: string
  // 更新日時
  listUpdatedDate: string
  // 更新者
  listUpdaterId: string
  // 添付ファイルの有無
  listNewsAttachmentCount: string
  // お知らせID
  listNewsId: number
  // sysバージョン番号
  listSysVersionNumber: number
  // グレーアウトフラグ
  greyOutFlag: string
  // 公開ステータス
  listPublicStatus: string
}

// お知らせ情報登録

// お知らせ情報編集

// ステート定義
interface NotificationData {
  notiListSearchCondition: MAAES010QueryRequest
  notiListResults: Notification[]
  notiRegisterForm: MAAES020CreateRequest
  notiDetailForm: MAAES030UpdateRequest
}
const notification: NotificationData = {
  notiListSearchCondition: initialValues,
  notiListResults: [],
  notiRegisterForm: initialValuesForCreate,
  notiDetailForm: initialValuesForDetail,
}

const notificationSlice = createSlice({
  slice: 'notification',
  initialState: notification,
  reducers: {
    // お知らせ情報一覧用
    // 初期処理
    initForNotiList(state) {
      return state
    },
    // 一覧取得
    selectNotificationList(state, action: PayloadAction<MAAES010QueryRequest>) {
      return state
    },
    // 一覧を設定
    setNotiListResults(state, action: PayloadAction<Notification[]>) {
      state.notiListResults = action.payload
      return state
    },
    // 検索条件を設定
    setNotiListSearchCondition(
      state,
      action: PayloadAction<MAAES010QueryRequest>
    ) {
      state.notiListSearchCondition = action.payload
      return state
    },
    // 公開更新
    updateByPublic(
      state,
      action: PayloadAction<{
        data: MAAES010IdRequest[]
        message: string
      }>
    ) {
      return state
    },
    // 非公開更新
    updateByNoPublic(
      state,
      action: PayloadAction<{
        data: MAAES010IdRequest[]
        message: string
      }>
    ) {
      return state
    },

    // お知らせ情報登録用
    // 初期表示
    initialCreate(state, action: PayloadAction<number>) {
      return state
    },
    // 画面項目取得
    getNotificationCreateValues(
      state,
      action: PayloadAction<MAAES020CreateRequest>
    ) {
      return state
    },
    // 画面項目を設定
    setNotificationCreateValues(
      state,
      action: PayloadAction<MAAES020CreateRequest>
    ) {
      state.notiRegisterForm = action.payload
      return state
    },
    // 登録
    createNotification(state, action: PayloadAction<MAAES020CreateRequest>) {
      return state
    },

    // お知らせ情報編集用
    // 初期表示
    initialDetail(state, action: PayloadAction<number>) {
      return state
    },
    // 画面項目を設定
    setNotiDetailValues(state, action: PayloadAction<MAAES030UpdateRequest>) {
      state.notiDetailForm = action.payload
      return state
    },
    // 更新
    updateNotification(state, action: PayloadAction<MAAES030UpdateRequest>) {
      return state
    },
  },
})

export const {
  // お知らせ情報一覧
  initForNotiList,
  selectNotificationList,
  setNotiListResults,
  setNotiListSearchCondition,
  updateByPublic,
  updateByNoPublic,
  // お知らせ情報登録
  initialCreate,
  getNotificationCreateValues,
  setNotificationCreateValues,
  createNotification,
  // お知らせ情報編集
  initialDetail,
  setNotiDetailValues,
  updateNotification,
} = notificationSlice.actions
export default notificationSlice.reducer
