import { createSlice, PayloadAction } from 'redux-starter-kit';
import { initialSeachData} from 'pages/MAACS010/formConfig'
import MAACS010QueryRequest from 'types/MAACS010QueryRequest'
import ClientIdRequest from 'types/MAACS010IdRequest'
import AgentIdRequest from 'types/MAACS010AgentIdRequest'
import { initialValues } from '../pages/MAACS040/formConfig';
import { initialDetailValues } from '../pages/MAACS030/formConfig';
import {MAACS020CreateRequest} from 'types/MAACS020CreateRequest'
import {MAACS030UpdateRequest} from 'types/MAACS030UpdateRequest'
import {MAACS040IdRequest} from 'types/MAACS040IdRequest'
import {MAACS040QueryRequest} from 'types/MAACS040QueryRequest'

export interface CompanyList {
  [key: string]: string|number;
  companyId: number; //企業ID
  companyName: string; //企業名
  currentlyInUse: string; //現在の利用状況
  currentlyInUseName: string; //現在の利用状況Name
  companyStaffDepartmentName: string; //企業担当者：部署
  companyStaffName: string; //企業担当者：担当者名
  salesStaffInChargeName: string; //営業担当者
  status: string; //ステータス
  statusName: string; //ステータスName
  accountIssuanceStatement: string; //アカウント発行状況
  accountIssuanceStatementName: string; //アカウント発行状況Name
  managerId: number; //管理者ID
  mailAddress: string; //メールアドレス
  companyAccountId: string; //企業アカウントID
  companyContractMediaId: string; //企業契約媒体ID
  sysVersionNumber: string; //sysバージョン番号
}
export interface OptionType {
  [key: string]: string;
  label: string
  value: string
}
export interface CompanySearch {
  [key: string]: any;
  clientId: string; //企業ID
  clientName: string; //企業名
  salesStaffName: string; //営業担当者
  mailAddressClient: string;// メールアドレス（企業）
  adminId: string; //営業部署名
  statusValid: string; //ステータス_有効
  statusInvalid: string;//ステータス_無効
}
export interface Company {
  dateList : CompanyList[],
  searchDate: CompanySearch,
  adminDate:OptionType[],
  companyAccountSearchCondition: MAACS040QueryRequest,
  companyAccountSearchResults: companyAccountInfo[],
  companyDetailResults: MAACS030UpdateRequest,
  contractCount: Number,
}

const initialState: Company = {
  dateList : [],
  searchDate:initialSeachData,
  adminDate:[],
  companyAccountSearchCondition: initialValues,
  companyAccountSearchResults: [],
  companyDetailResults: initialDetailValues,
  contractCount: 0,
};

export interface companyAccountQueryRequest {
  clientId: Number; //企業ID
  clientName: string; //企業名
  fullName: string; //氏名
  accountArray: string[]; //アカウント種別
  statusArray: string[]; //ステータス
}

export interface setTemporaryPasswordRequest {
  loginId: String; //ログインID
}

export interface companyAccountInfo {
  loginId: string; //ログインID
  fullName: string; //氏名
  department: string; //部署
  mailAddress: string; //メールアドレス
  phoneNumber: string; //電話番号
  contractMediaName: string; //媒体名
  accountType: string; //アカウント種別
  recruitmentGroupName: string; //採用グループ名
  validFlag: string; //有効フラグ
  lastLoginTimeShow: string; //最終ログイン日時
  companyAccountId: string; //企業アカウントID
  sysVersionNumber: string; //sysバージョン番号
  magiFlag: string; //Magiフラグ
}
const companySlice = createSlice({
  slice: 'company',
  initialState,
  reducers: {
    //initial
    companyInitialize(state,title) {
      return state;
    },
    initializeCompany(state) {
      return state;
    },
    // "検索する"ボタン押下時にdbを検索
    searchCompanyList(state, action: PayloadAction<MAACS010QueryRequest>) {
      return state;
    },
    setCompanyList(state , action: PayloadAction<CompanyList[]>) {
      state.dateList = action.payload;
      return state;
    },
    // "検索する"ボタン押下時に検索条件を保持
    setCompanySearchDate(state, action: PayloadAction<CompanySearch>) {
      return state;
    },
    setCompanySearch(state, action: PayloadAction<CompanySearch>) {
      state.searchDate = action.payload;
      return state;
    },
    //"ログイン"ボタン押下時
    loginClick(state, action: PayloadAction<AgentIdRequest>) {
      return state
    },
    //"アカウント発行"ボタン押下時
    accountIssuance(state, action: PayloadAction<ClientIdRequest>) {
      return state
    },
    //"仮パスワード発行"ボタン押下時
    temporaryPasswordIssuance(state, action: PayloadAction<ClientIdRequest>) {
      return state
    },
    //営業担当者情報取得
    searchAdminDateList(state) {
      return state;
    },
    setAdminDate(state , action: PayloadAction<OptionType[]>) {
      state.adminDate = action.payload;
      return state;
    },
    selectCompanyAccountList(state, action: PayloadAction<MAACS040QueryRequest>) {
      state.companyAccountSearchCondition = action.payload;

      return state;
    },
    setCompanyAccountSearchResults(state, action: PayloadAction<companyAccountInfo[]>) {
      state.companyAccountSearchResults = action.payload;
      return state;
    },
    setCompanyAccountSearchCondition(state, action: PayloadAction<{loginId:String}>) {
      return state;
    },
    setLoginID(state, action:PayloadAction<MAACS040IdRequest>){
      return state;
    },
    createCompany(state,action:PayloadAction<MAACS020CreateRequest>){
      return state;
    },
    getCompanyDetail(state, action: PayloadAction<string>) {
      return state;
    },
    setCompanyDetail(state, action: PayloadAction<MAACS030UpdateRequest>) {
      state.companyDetailResults = action.payload;
      return state;
    },
    updateCompany(state,action:PayloadAction<MAACS030UpdateRequest>){
      return state;
    },
    contractCheck(state,action:PayloadAction<string>){
      return state;
    },
    setContractCount(state,action:PayloadAction<Number>){
      state.contractCount = action.payload;
      return state;
    },
    setSearchCondition(state,action: PayloadAction<MAACS040QueryRequest>){
      state.companyAccountSearchCondition = action.payload;
      return state;
    },
  },
});

export const {
  companyInitialize,
  initializeCompany,
  searchCompanyList,
  setCompanyList,
  setCompanySearchDate,
  setCompanySearch,
  loginClick,
  accountIssuance,
  temporaryPasswordIssuance,
  searchAdminDateList,
  setAdminDate,
  selectCompanyAccountList,
  setCompanyAccountSearchResults,
  setCompanyAccountSearchCondition,
  setLoginID,
  createCompany,
  getCompanyDetail,
  setCompanyDetail,
  updateCompany,
  contractCheck,
  setContractCount,
  setSearchCondition,
} = companySlice.actions;
export default companySlice.reducer;
