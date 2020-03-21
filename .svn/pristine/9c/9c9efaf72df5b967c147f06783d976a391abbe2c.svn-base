import { createSlice, PayloadAction } from 'redux-starter-kit'
import MAABS030CreateRequest from 'types/MAABS030CreateRequest'
import PasswordRequestDto from 'types/MAABS010PasswordRequest'
import { replaceToOrigin } from 'utils/misc';
import { initialValues } from '../pages/MAABS020/formConfig'
import { initialValuesCreate } from '../pages/MAABS030/formConfig'
import { initialValuesD } from '../pages/MAABS040/formConfig'
import { MAABS020QueryRequest } from 'types/MAABS020QueryRequest'
import MAABS040UpdateRequest from 'types/MAABS040UpdateRequest'
import { MAABS020IdRequest } from 'types/MAABS020IdRequest'
export interface Permission {
  [key: string]: string | null
  id: string
  name: string
  sortOrder: string | null
  status: string | null
}
export interface AuthorityMaster {
  [key: string]: string | null
  authorityId: string
  authorityName: string
  displayOrder: string | null
  validFlag: string | null
}

export interface Account {
  [key: string]: string | Permission[]
  id: string //管理者ID
  name: string //氏名
  department: string //部署名
  email: string //メールアドレス
  loginId: string //ログインID
  password: string //パスワード
  salt: string //パスワードSALT
  onetimePasswordFlag: string //ワンタイムパスワードフラグ
  passwordExpireDate: string //パスワード有効期限
  status: string //ステータス
  lastLoginDate: string //最終ログイン日時
  registrationDate: string //登録日時
  registrationId: string //登録者
  updateDate: string //更新日時
  updateId: string //更新者
  permissions: Permission[] //権限
}

export interface Accounts {
  [key: string]: string | number | string[]
  managerId: number //管理者ID
  loginId: string //ログインID
  fullName: string //氏名
  name: string //氏名
  departmentName: string //部署名
  department: string //部署名
  mailAddress: string //メールアドレス
  email: string //メールアドレス
  invalidUser: number //ステータス
  authorityName: string //権限
  authoritySystem: string //システム管理
  authorityAccount: string //アカウント管理
  authorityannounceForCompany: string //企業向けアナウンス
  authorityCompany: string //企業管理
  authoritySupport: string //企業サポート
  authoritySales: string //営業
  permissions: string[] //権限
  authoritySystemFlag: string //システム管理権限フラグ
  authSystemFlag: string //システム管理フラグ
  authAccountFlag: string //アカウント管理フラグ
  authannounceForCompanyFlag: string //企業向けアナウンスフラグ
  authCompanyFlag: string //企業管理フラグ
  authSupportFlag: string //企業サポートフラグ
  authSalesFlag: string //営業フラグ
  sysVersionNumberMgrAuz: number;//sysバージョン番号
  sysVersionNumberAdmin: number;//sysバージョン番号
}

export interface AccountsD {
  managerId: number //管理者ID
  loginId: string //ログインID
  fullName: string //氏名
  name: string //氏名
  departmentName: string //部署名
  department: string //部署名
  mailAddress: string //メールアドレス
  email: string //メールアドレス
  status: string//ステータス
  statusOld: string//ステータスチェック用
  authorityName: string //権限
  authoritySystem: string //システム管理
  authorityAccount: string //アカウント管理
  authorityannounceForCompany: string //企業向けアナウンス
  authorityCompany: string //企業管理
  authoritySupport: string //企業サポート
  authoritySales: string //営業
  permissions: string[] //権限
  authoritySystemFlag: string //システム管理権限フラグ
  authSystemFlag: string //システム管理フラグ
  authAccountFlag: string //アカウント管理フラグ
  authannounceForCompanyFlag: string //企業向けアナウンスフラグ
  authCompanyFlag: string //企業管理フラグ
  authSupportFlag: string //企業サポートフラグ
  authSalesFlag: string //営業フラグ
  authSystemFlagOld: string //システム管理フラグチェック用
  authAccountFlagOld: string //アカウント管理フラグチェック用
  authannounceForCompanyFlagOld: string //企業向けアナウンスフラグチェック用
  authCompanyFlagOld: string //企業管理フラグチェック用
  authSupportFlagOld: string //企業サポートフラグチェック用
  authSalesFlagOld: string //営業フラグチェック用
  sysVersionNumberAdmin: number;//sysバージョン番号
}
export interface CreateInit {
  authSystemFlag: string //システム管理フラグ
  authAccountFlag: string //アカウント管理フラグ
  authannounceForCompanyFlag: string //企業向けアナウンスフラグ
  authCompanyFlag: string //企業管理フラグ
  authSupportFlag: string //企業サポートフラグ
  authSalesFlag: string //営業フラグ
}
export interface SysVersionNumbereInit {
  sysVersionNumber: string //システム
}

interface AccountList {
  accountListSearchCondition: MAABS020QueryRequest,
  accountDetailResults: AccountsD,
  accountListResults: Accounts[],
  inValidCheckCount: number,
  accountrs: Account[],
  accountCreateInit: CreateInit,
  sysVersion:SysVersionNumbereInit,
}
const accountList: AccountList = {
  accountListSearchCondition: initialValues,
  accountListResults: [],
  accountDetailResults: initialValuesD,
  inValidCheckCount: 0 ,
  accountrs: [],
  accountCreateInit: initialValuesCreate,
  sysVersion: {sysVersionNumber: ''},
};


const accountSlice = createSlice({
  slice: 'accout',
  initialState: accountList,
  reducers: {
    //initial
    accountInitialize(state,title) {
      return state;
    },
    initializeAccount(state) {
      return state;
    },
    getAccountDetail(state, action: PayloadAction<string>) {
      return state
    },
    setAccountDetail(state, action: PayloadAction<AccountsD>) {
      state.accountDetailResults = action.payload;
      return state;
    },
    getAccountCreateInit(state) {
      return state
    },
    setAccountCreateInit(state, action: PayloadAction<CreateInit>) {
      state.accountCreateInit = action.payload;
      return state;
    },
    selectAccountList(state, action: PayloadAction<MAABS020QueryRequest>) {
      return state;
    },
    setAccountListSearchCondition(state, action: PayloadAction<MAABS020QueryRequest>) {
      state.accountListSearchCondition = action.payload;
      return state;
    },
    setAccountListResults(state, action: PayloadAction<Accounts[]>) {
      state.accountListResults = action.payload;
      return state;
    },
    updateByValid(
      state,
      action: PayloadAction<{ data: MAABS020IdRequest[]; message: string }>
    ) {
      return state
    },
    updateByInValid(
      state,
      action: PayloadAction<{ data: MAABS020IdRequest[]; message: string }>
    ) {
      return state
    },
    inValidCheck(
      state,
      action: PayloadAction<{ data: MAABS020IdRequest[]; message: string }>
    ) {
      return state
    },
    setinValidCheckCount(state,action: PayloadAction<number>){
      state.inValidCheckCount = action.payload;
      return state
    },
    updateByPassword(
      state,
      action: PayloadAction<{ data: MAABS020IdRequest[]; message: string }>
    ) {
      return state
    },
    fetchAccoutList(state) {
      return state
    },
    setAccount(state, action: PayloadAction<Account[]>) {
      state.accountrs = action.payload;
      return state;
    },
    createAccount(state, action: PayloadAction<MAABS030CreateRequest>) {
      return state
    },
    updateAccount(state, action: PayloadAction<MAABS040UpdateRequest>) {
      return state
    },
    deleteAccount(state, action: PayloadAction<string>) {
      return state
    },
    updatePassword(state,
      action: PayloadAction<PasswordRequestDto>
    ) { return state },
    updatePasswordSuccess() {
      replaceToOrigin();
    },
    setSysVersionNumberInit(state, action: PayloadAction<SysVersionNumbereInit>) {
      state.sysVersion = action.payload;
      return state;
    },
    getSysVersionNumberInit(state) {
      return state;
    },
  },
})

export const {
  accountInitialize,
  initializeAccount,
  getAccountDetail,
  setAccountDetail,
  getAccountCreateInit,
  setAccountCreateInit,
  selectAccountList,
  setAccountListSearchCondition,
  setAccountListResults,
  inValidCheck,
  setinValidCheckCount,
  updateByValid,
  updateByInValid,
  updateByPassword,
  fetchAccoutList,
  setAccount,
  createAccount,
  updateAccount,
  deleteAccount,
  updatePassword,
  updatePasswordSuccess,
  setSysVersionNumberInit,
  getSysVersionNumberInit
} = accountSlice.actions
export default accountSlice.reducer
