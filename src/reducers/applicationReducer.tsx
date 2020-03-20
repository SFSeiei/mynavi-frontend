import { createSlice, PayloadAction } from 'redux-starter-kit'
import { initialValues,initialDetailValues } from 'pages/MAADS010/formConfig'
import { MAADS010QueryRequest } from 'types/MAADS010QueryRequest'

////検索結果の項目
export interface ApplicationList {
  [key: string]: string | string[]
  applicationId: string //申込ID
  companyStaffDepartmentName: string //自分が担当
  salesStaffInChargeName: string //営業担当
  grayFlag: string //グレーアウトフラグ
  labelFlag: string //申込IDラベルフラグ
  agency: string //代理店
  clientId: string //企業ID
  clientName: string //企業名
  startDateFrom: string //利用開始日_from
  startDateTo: string //利用開始日_to
  endDateFrom: string //利用終了日_from
  endDateTo: string //利用終了日_to
  contractType: string //申込種別
  contractTypeName: string //申込種別名称
  status: string //ステータス
  statusName: string //ステータス名称
  fefaultMessage: string //fefaultMessage
  field: string //field
}
//検索条件の項目
export interface AppSearch {
  [key: string]: any
  charge: string //自分が担当
  managerId: string //管理者ID
  salesStaff: string //営業担当
  agency: string //代理店
  clientId: string //企業ID
  clientName: string //企業名
  startDateFrom: string //ロ利用開始日_from
  startDateTo: string //利用開始日_to
  endDateFrom: string //利用終了日_from
  endDateTo: string //利用終了日_to
  applicationTypeNormal: string //申込種別_通常
  applicationTypeEmploymentNaviPre: string //申込種別_就職ナビ(プレ)
  applicationTypeEmploymentNaviMain: string //申込種別_就職ナビ(本サイト)
  applicatiionTypeJobChangeNavi: string //申込種別_転職ナビ
  statusValid: string //ステータス_有効
  statusInvalid: string //ステータス_無効
}
//詳細情報
export interface ApplicationDetailResult {

  // 企業ID
  clientId: string;
  // 企業名
  clientName: string;
  // 営業担当
  salesStaff: string;
  // 営業担当部署
  salesDepartmentName: string;
  // 代理店名
  agencyInformation: string;
  // 企業担当者：部署
  departmentClient: string;
  // 企業担当者：担当者名
  staffNameClient: string;
  // 企業担当者：電話番号
  telClient: string;
  // 企業担当者：メールアドレス
  mailAddressClient: string;
  // 企画種別
  applicationTypeResult: string;
  // 利用開始日
  startTimeResult: string;
  // 利用終了日
  endTimeResult: string;
  // ステータス
  statusResult: string;
}
//営業担当の項目
export interface initList {
  [key: string]: string | string[]
  managerId: string //管理者ID
  fullName: string //氏名
  departmentName: string //部署名
}

//検索条件と検索結果のinterface
export interface Application {
  dateList: ApplicationList[]
  searchDate: AppSearch
  detailData: ApplicationDetailResult
  initDateList: initList[]
}
//初期化
const initialState: Application = {
  dateList: [],
  searchDate: initialValues,
  detailData: initialDetailValues,
  initDateList: [],
}

const applicationSlice = createSlice({
  slice: 'application',
  initialState,
  reducers: {
    initialApplication(state) {
      return state;
    },
    applicationInitialize(state, title) {
      return state
    },
    searchApplicationList(state,action: PayloadAction<MAADS010QueryRequest>) {
      return state
    },
    setApplication(state, action: PayloadAction<ApplicationList[]>) {
      state.dateList = action.payload
      return state
    },
    setAppSearchList(state, action: PayloadAction<AppSearch>) {
      return state
    },
    setAppSearch(state, action: PayloadAction<AppSearch>) {
      state.searchDate = action.payload
      return state
    },
    setClientId(state, action: PayloadAction<string>) {
      state.searchDate.clientId = action.payload
      state.searchDate.charge = '0'
      return state
    },
    loginMagiClientId(state) {
      return state
    },
    getApplicationDetail(state, action: PayloadAction<string>) {
      return state
    },
    setApplicationDetail(state, action: PayloadAction<ApplicationDetailResult>) {
      state.detailData = action.payload
      return state
    },
  },
})

export const {
  initialApplication,
  applicationInitialize,
  searchApplicationList,
  setApplication,
  setAppSearchList,
  setAppSearch,
  setClientId,
  loginMagiClientId,
  getApplicationDetail,
  setApplicationDetail,
} = applicationSlice.actions
export default applicationSlice.reducer
