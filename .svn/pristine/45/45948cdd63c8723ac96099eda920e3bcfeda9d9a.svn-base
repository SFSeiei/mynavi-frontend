/**
 *  validation
 */

import * as yup from 'yup';
import { miscRegexSet } from 'utils/regex'
import { validationMessageSet } from 'utils/contants'

export default yup.object().shape(
  {
    // 企業ID
    clientId: yup
      .string(),

    // 操作者ID
    loginId: yup
      .string(),

  // 操作者
  fullName: yup
    .string()
    .test('isHalfWidth', validationMessageSet.halfWidth, (value: any) => miscRegexSet.halfWidth.test(value)),

  // IPアドレス
  ipAddress: yup
    .string()
    .test('isHalfWidth', validationMessageSet.halfWidth, (value: any) => miscRegexSet.halfWidth.test(value)),

  // 対象期間From（年月日）
  usagePeriodFromYMD: yup
    .string()
    .max(400, validationMessageSet.maxLength)
    .test('isDate', validationMessageSet.date, (value: any) => miscRegexSet.date.test(value)),

  // 対象期間From（時）
  usagePeriodFromH: yup
    .number()
    .min(0, validationMessageSet.minValue)
    .max(23, validationMessageSet.maxValue),

  // 対象期間To（年月日）
  usagePeriodToYMD: yup
    .string()
    .max(400, validationMessageSet.maxLength)
    .test('isDate', validationMessageSet.date, (value: any) => miscRegexSet.date.test(value)),

  // 対象期間To（時）
  usagePeriodToH: yup
      .number()
      .min(0, validationMessageSet.minValue)
      .max(23, validationMessageSet.maxValue),

  // 操作種別_Magi 企業ログイン
  manipulationTypeMagiCompanyLogin: yup
    .string()
    .test('isFlag',validationMessageSet.flag, (value: any) => miscRegexSet.flag.test(value)),

  // 操作種別_Magi 企業ログアウト
  manipulationTypeMagiCompanyLogout: yup
    .string()
    .test('isFlag',validationMessageSet.flag, (value: any) => miscRegexSet.flag.test(value)),

  // 操作種別_利用規約への同意
  manipulationTypeTermsAgree: yup
    .string()
    .test('isFlag',validationMessageSet.flag, (value: any) => miscRegexSet.flag.test(value)),

  // 操作種別_追加アカウント連携
  manipulationTypeCoordinationComanyAccount: yup
    .string()
    .test('isFlag',validationMessageSet.flag, (value: any) => miscRegexSet.flag.test(value)),

  // 操作種別_エントリー情報アップロード
  manipulationTypeEntryUpload: yup
    .string()
    .test('isFlag',validationMessageSet.flag, (value: any) => miscRegexSet.flag.test(value)),

  // 操作種別_エントリー検索
  manipulationTypeEntrySearch: yup
    .string()
    .test('isFlag',validationMessageSet.flag, (value: any) => miscRegexSet.flag.test(value)),

  // 操作種別_エントリ－情報取込
  manipulationTypeEntryImport: yup
    .string()
    .test('isFlag',validationMessageSet.flag, (value: any) => miscRegexSet.flag.test(value)),

  // 操作種別_エントリー情報閲覧
  manipulationTypeEntryView: yup
    .string()
    .test('isFlag',validationMessageSet.flag, (value: any) => miscRegexSet.flag.test(value)),

  // 操作種別_エントリー情報更新
  manipulationTypeEntryUpdate: yup
    .string()
    .test('isFlag',validationMessageSet.flag, (value: any) => miscRegexSet.flag.test(value)),

  // 操作種別_エントリー情報添付ファイル削除
  manipulationTypeEntryDelete: yup
    .string()
    .test('isFlag',validationMessageSet.flag, (value: any) => miscRegexSet.flag.test(value)),

  // 操作種別_エントリー情報一括CSV出力
  manipulationTypeEntryBulkCsvOutput: yup
    .string()
    .test('isFlag',validationMessageSet.flag, (value: any) => miscRegexSet.flag.test(value)),

  // 操作種別_エントリー情報PDF出力
  manipulationTypeEntryPdfOutput: yup
    .string()
    .test('isFlag',validationMessageSet.flag, (value: any) => miscRegexSet.flag.test(value)),

  // 操作種別_エントリー情報一括PDF出力
  manipulationTypeEntryBulkPdfOutput: yup
    .string()
    .test('isFlag',validationMessageSet.flag, (value: any) => miscRegexSet.flag.test(value)),

  // 操作種別_メッセージ送信
  manipulationTypeMessageSend: yup
    .string()
    .test('isFlag',validationMessageSet.flag, (value: any) => miscRegexSet.flag.test(value)),

  // 操作種別_メッセージ一括送信
  manipulationTypeBulkMessageSend: yup
    .string()
    .test('isFlag',validationMessageSet.flag, (value: any) => miscRegexSet.flag.test(value)),

  // 操作種別_添付ファイルダウンロード
  manipulationTypeFileDownload: yup
    .string()
    .test('isFlag',validationMessageSet.flag, (value: any) => miscRegexSet.flag.test(value)),

  // 操作種別_メッセージ削除
  manipulationTypeMessageDelete: yup
    .string()
    .test('isFlag',validationMessageSet.flag, (value: any) => miscRegexSet.flag.test(value)),

  // 操作種別_メッセージ送信（API）
  manipulationTypeMessageSendApi: yup
    .string()
    .test('isFlag',validationMessageSet.flag, (value: any) => miscRegexSet.flag.test(value)),

  // 操作種別_メッセージ受信（API）
  manipulationTypeMessageReceiveApi: yup
    .string()
    .test('isFlag',validationMessageSet.flag, (value: any) => miscRegexSet.flag.test(value)),

  // 操作種別_予約メッセージキャンセル
  manipulationTypeMessageCancel: yup
    .string()
    .test('isFlag',validationMessageSet.flag, (value: any) => miscRegexSet.flag.test(value)),

  // 操作種別_進捗更新
  manipulationTypeProgressUpdate: yup
    .string()
    .test('isFlag',validationMessageSet.flag, (value: any) => miscRegexSet.flag.test(value)),

  // 操作種別_一括進捗更新
  manipulationTypeBulkProgressUpdate: yup
    .string()
    .test('isFlag',validationMessageSet.flag, (value: any) => miscRegexSet.flag.test(value)),

  // 操作種別_内定通知書出力
  manipulationTypeInformalOfferOutput: yup
    .string()
    .test('isFlag',validationMessageSet.flag, (value: any) => miscRegexSet.flag.test(value)),

  // 操作種別_連携サイトアカウントでのログイン（シングルサインオン）
  manipulationTypeLoginSso: yup
    .string()
    .test('isFlag',validationMessageSet.flag, (value: any) => miscRegexSet.flag.test(value)),

  // 操作種別_マイキャリアボックス提出依頼
  manipulationTypeSubmissionRequestMcb: yup
    .string()
    .test('isFlag',validationMessageSet.flag, (value: any) => miscRegexSet.flag.test(value)),
});