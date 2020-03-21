/**
 * MAAES020CreateRequest validation
 */

import * as yup from 'yup'
import { miscRegexSet } from 'utils/regex'
import { validationMessageSet } from 'utils/contants'

export default yup.object().shape({

  // 自分が更新
  updateByMyself: yup
    .string()
    .test('isFlag',validationMessageSet.flag, (value: any) => miscRegexSet.flag.test(value)),
  // タイトル
  subject: yup
    .string()
    .max(400, validationMessageSet.maxLength)
    .test('isHalfWidth', validationMessageSet.halfWidth, (value: any) => miscRegexSet.halfWidth.test(value)),
  // 公開開始日_from
  publicStartDateFrom: yup
  .string()
  .max(400, validationMessageSet.maxLength)
  .test('isDate', validationMessageSet.date, (value: any) => miscRegexSet.date.test(value)),
  // 公開開始日_to
  publicStartDateTo: yup
  .string()
  .max(400, validationMessageSet.maxLength)
  .test('isDate', validationMessageSet.date, (value: any) => miscRegexSet.date.test(value)),
  // 障害報告
  categoryFaultReport: yup
    .string()
    .test('isFlag',validationMessageSet.flag, (value: any) => miscRegexSet.flag.test(value)),
  // メンテナンス
  categoryMaintenance: yup
    .string()
    .test('isFlag',validationMessageSet.flag, (value: any) => miscRegexSet.flag.test(value)),
  // リリース
  categoryRelease: yup
    .string()
    .test('isFlag',validationMessageSet.flag, (value: any) => miscRegexSet.flag.test(value)),
  // インフォメーション
  categoryInformation: yup
    .string()
    .test('isFlag',validationMessageSet.flag, (value: any) => miscRegexSet.flag.test(value)),
  // 公開
  publicFlagPublic: yup
    .string()
    .test('isFlag',validationMessageSet.flag, (value: any) => miscRegexSet.flag.test(value)),
  // 非公開
  publicFlagNoPublic: yup
    .string()
    .test('isFlag',validationMessageSet.flag, (value: any) => miscRegexSet.flag.test(value)),
  // 公開前
  publicStatusBefore: yup
    .string()
    .test('isFlag',validationMessageSet.flag, (value: any) => miscRegexSet.flag.test(value)),
  // 公開中
  publicStatusIn: yup
    .string()
    .test('isFlag',validationMessageSet.flag, (value: any) => miscRegexSet.flag.test(value)),
  // 公開終了
  publicStatusAfter: yup
    .string()
    .test('isFlag',validationMessageSet.flag, (value: any) => miscRegexSet.flag.test(value)),
})
