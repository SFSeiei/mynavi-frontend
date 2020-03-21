import { createSlice, PayloadAction } from 'redux-starter-kit';
import MAAFS010QueryRequest from 'types/MAAFS010QueryRequest'
import { initialValues } from 'pages/MAAFS010/formConfig';

export interface operationLogPrim {
  [key: string]: any;
  clientId: string; //企業ID
  clientName: string; //企業名
  loginId: string;//操作者ID
  fullName: string; //操作者
  ipAddress: string; //IPアドレス
  usagePeriodFromYMD: string; //対象期間From（年月日）
  usagePeriodFromH: string; //対象期間From（時）
  usagePeriodToYMD: string; //対象期間To（年月日）
  usagePeriodToH: string; //対象期間To（時）
  // manipulationType: string[]; //操作種別
  manipulationTypeMagiCompanyLogin: string; //Magi 企業ログイン
  manipulationTypeMagiCompanyLogout: string; //Magi 企業ログアウト
  manipulationTypeTermsAgree: string; //利用規約への同意
  manipulationTypeCoordinationComanyAccount: string; //追加アカウント連携
  manipulationTypeEntryUpload: string; //エントリー情報アップロード
  manipulationTypeEntrySearch: string; //エントリー検索
  manipulationTypeEntryImport: string; //エントリ－情報取込
  manipulationTypeEntryView: string; //エントリー情報閲覧
  manipulationTypeEntryUpdate: string; //エントリー情報更新
  manipulationTypeEntryDelete: string; //エントリー情報添付ファイル削除
  manipulationTypeEntryBulkCsvOutput: string; //エントリー情報一括CSV出力
  manipulationTypeEntryPdfOutput: string; //エントリー情報PDF出力
  manipulationTypeEntryBulkPdfOutput: string; //エントリー情報一括PDF出力
  manipulationTypeMessageSend: string; //メッセージ送信
  manipulationTypeBulkMessageSend: string; //メッセージ一括送信
  manipulationTypeFileDownload: string; //添付ファイルダウンロード
  manipulationTypeMessageDelete: string; //メッセージ削除
  manipulationTypeMessageSendApi: string; //メッセージ送信（API）
  manipulationTypeMessageReceiveApi: string; //メッセージ受信（API）
  manipulationTypeMessageCancel: string; //予約メッセージキャンセル
  manipulationTypeProgressUpdate: string; //進捗更新
  manipulationTypeBulkProgressUpdate: string; //一括進捗更新
  manipulationTypeInformalOfferOutput: string; //内定通知書出力
  manipulationTypeLoginSso: string; //連携サイトアカウントでのログイン（シングルサインオン）
  manipulationTypeSubmissionRequestMcb: string; //マイキャリアボックス提出依頼
}
export interface MAAFS010OperationLogOutDto {
  [key: string]: string | string[];
  manipulationTime: string;// 操作日時
  manipulationType: string; //操作種別
  manipulationTypeName: string;//操作種別名
  loginId: string;//操作者ID
  loginName: string;//操作者ID名
  fullName: string; //操作者
  ipAddress: string; //IPアドレス
  manipulationDetail: string; //操作概要
  userAgent: string; //UserAgent
  delegateLoginAccountFlag: string; //代行ログインアカウントフラグ
  coordinationFormerMedia: string; //連携元媒体名
  companyId: string; //企業ID
  hostName: string; //ホスト名
}
// 企業情報一覧画面から遷移した時、その画面で選択した行の企業IDと企業名と現在時刻から30日前の日付
export interface ClientData {
  clientId: string; //企業ID
  clientName: string; //企業名
  usagePeriodFromYMD: string; //対象期間From（年月日）
}
export interface OptionType {
  [key: string]: string;
  label: string
  value: string
}

export interface operationLog {
  searchresult: MAAFS010OperationLogOutDto[],
  operationLogPrim: operationLogPrim,
  suggestList: OptionType[],
};
export const OperationLog: operationLog = {
  searchresult : [],
  operationLogPrim : initialValues,
  suggestList: [],
};
const operationLogSlice = createSlice({
  slice: 'operationLog',
  initialState : OperationLog,
  reducers: {
    initialData(state) {
      return state;
    },
    // 検索
    searchOperationLogList(state, action: PayloadAction<MAAFS010QueryRequest>) {
      return state;
    },

    // 検索結果
    setOperationLog(state, action: PayloadAction<MAAFS010OperationLogOutDto[]>) {
      state.searchresult = action.payload;
      return state;
    },
    // 検索条件
    setOperationLogSearchDate(state, action: PayloadAction<operationLogPrim>) {
      state.operationLogPrim = action.payload;
      return state;
    },

    // 検索条件
    setOperationLogPrim(state, action: PayloadAction<operationLogPrim>) {
      state.operationLogPrim = action.payload;
      return state;
    },

    selectOperationLog(state, action: PayloadAction<MAAFS010OperationLogOutDto[]>) {
      state.searchresult = action.payload;
      return state;
    },
    // suggest 操作者IDと操作者名設定
    setSuggestList(state, action: PayloadAction<OptionType[]>){
      state.suggestList = action.payload;
      return state;
    },
    // suggest 操作者IDと操作者名取得
    searchSuggestList(state){
      return state;
    },
    // 企業情報一覧画面から遷移した時、その画面で選択した行の企業IDと企業名をセットする。
    setClientData(state, action: PayloadAction<ClientData>) {
      state.operationLogPrim.clientId = action.payload.clientId
      state.operationLogPrim.clientName = action.payload.clientName
      state.operationLogPrim.usagePeriodFromYMD = action.payload.usagePeriodFromYMD
      return state
    },
  },
});

export const {
  initialData,
  searchOperationLogList,
  setOperationLogPrim,
  setOperationLog,
  selectOperationLog,
  setOperationLogSearchDate,
  setSuggestList,
  searchSuggestList,
  setClientData,
} = operationLogSlice.actions;
export default operationLogSlice.reducer;
