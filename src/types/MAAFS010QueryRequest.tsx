/**
 * MAAFS010QueryRequest
 */
export default interface MAAFS010QueryRequest {

  // 企業ID
  clientId: string;
  // 企業名
  clientName: string, 
  // 操作者ID
  loginId: string;
  // 操作者
  fullName: string;
  // IPアドレス
  ipAddress:string;
  // 対象期間From（年月日）
  usagePeriodFromYMD: string;
  // 対象期間From（時）
  usagePeriodFromH: string;
  // 対象期間To（年月日）
  usagePeriodToYMD: string;
  // 対象期間To（時）
  usagePeriodToH: string;
  // 操作種別
  // manipulationType: string[];

  // 操作種別_Magi 企業ログイン
  manipulationTypeMagiCompanyLogin:string; 

  // 操作種別_Magi 企業ログアウト
  manipulationTypeMagiCompanyLogout: string;

  // 操作種別_利用規約への同意
  manipulationTypeTermsAgree: string;

  // 操作種別_追加アカウント連携
  manipulationTypeCoordinationComanyAccount: string;

  // 操作種別_エントリー情報アップロード
  manipulationTypeEntryUpload: string;

  // 操作種別_エントリー検索
  manipulationTypeEntrySearch: string;

  // 操作種別_エントリ－情報取込
  manipulationTypeEntryImport: string;

  // 操作種別_エントリー情報閲覧
  manipulationTypeEntryView: string;

  // 操作種別_エントリー情報更新
  manipulationTypeEntryUpdate: string;

  // 操作種別_エントリー情報添付ファイル削除
  manipulationTypeEntryDelete: string;

  // 操作種別_エントリー情報一括CSV出力
  manipulationTypeEntryBulkCsvOutput: string;

  // 操作種別_エントリー情報PDF出力
  manipulationTypeEntryPdfOutput: string;

  // 操作種別_エントリー情報一括PDF出力
  manipulationTypeEntryBulkPdfOutput: string;

  // 操作種別_メッセージ送信
  manipulationTypeMessageSend: string;

  // 操作種別_メッセージ一括送信
  manipulationTypeBulkMessageSend: string;

  // 操作種別_添付ファイルダウンロード
  manipulationTypeFileDownload: string;

  // 操作種別_メッセージ削除
  manipulationTypeMessageDelete: string;

  // 操作種別_メッセージ送信（API）
  manipulationTypeMessageSendApi: string;

  // 操作種別_メッセージ受信（API）
  manipulationTypeMessageReceiveApi: string;

  // 操作種別_予約メッセージキャンセル
  manipulationTypeMessageCancel: string;

  // 操作種別_進捗更新
  manipulationTypeProgressUpdate: string;

  // 操作種別_一括進捗更新
  manipulationTypeBulkProgressUpdate: string;

  // 操作種別_内定通知書出力
  manipulationTypeInformalOfferOutput: string;

  // 操作種別_連携サイトアカウントでのログイン（シングルサインオン）
  manipulationTypeLoginSso: string;

  // 操作種別_マイキャリアボックス提出依頼
  manipulationTypeSubmissionRequestMcb: string;
}
