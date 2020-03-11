import { RootState } from 'reducers';

export const getAccountList = (state: RootState) => state.account;
export const getAccountByLoginId = (loginId: string) => (state: RootState) =>
  state.account.accountrs.find(i => i.loginId === loginId);
export const getAccountListSearchCondition = (state: RootState) => state.account.accountListSearchCondition;
// お知らせ一覧検索条件取得
export const getNotiListSearchCondition = (state: RootState) => state.notification.notiListSearchCondition;
// お知らせ登録画面情報取得
export const getNotificationCreateValues = (state: RootState) => state.notification.notiRegisterForm;
export const getCompanyAccountSearchCondition = (state: RootState) => state.company.companyAccountSearchCondition;
export const getOperationLogList = (state: RootState) => state.operationLog.searchresult;

// 申込情報一覧検索条件取得
export const getAppricationSearch = (state: RootState) => state.application.searchDate;
export const getCompanySearchDate = (state: RootState) => state.company.searchDate;

//企業操作ログ　検索条件取得
export const getOperationLogSearch = (state: RootState) => state.operationLog.operationLogPrim;