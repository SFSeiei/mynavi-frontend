/**
 * MAADS010QueryRequest validation
 */

import * as yup from 'yup'
import { miscRegexSet } from 'utils/regex'
import { validationMessageSet } from 'utils/contants'

export default yup.object().shape({

  // 自分が担当
  charge: yup
    .string()
    .test('isFlag',validationMessageSet.flag, (value: any) => miscRegexSet.flag.test(value)),

  // 営業担当
  salesStaff: yup
    .string()
    .max(400, validationMessageSet.maxLength)
    .test('isHalfWidth', validationMessageSet.halfWidth, (value: any) => miscRegexSet.halfWidth.test(value)),
  // 代理店
  agency: yup
    .string()
    .max(400, validationMessageSet.maxLength)
    .test('isHalfWidth', validationMessageSet.halfWidth, (value: any) => miscRegexSet.halfWidth.test(value)),
  // 企業ID
  clientId: yup.lazy(value =>
    value
      ? yup
    .string()
    .max(400, validationMessageSet.maxLength)
    .test('isHalfWidthNumber', validationMessageSet.halfWidthNumber, (value: any) => miscRegexSet.halfWidthNumber.test(value))
    : yup.mixed().notRequired()),
  // 企業名
  clientName: yup
    .string()
    .max(400, validationMessageSet.maxLength)
    .test('isHalfWidth', validationMessageSet.halfWidth, (value: any) => miscRegexSet.halfWidth.test(value)),

    // 利用開始日_from
  startDateFrom: yup
    .string()
    .max(400, validationMessageSet.maxLength)
    .test('isDate', validationMessageSet.date, (value: any) => miscRegexSet.date.test(value)),
  // 利用開始日_to
  startDateTo: yup
     .string()
     .max(400, validationMessageSet.maxLength)
     .test('isDate', validationMessageSet.date, (value: any) => miscRegexSet.date.test(value)),

  // 利用終了日_from
  endDateFrom:yup
     .string()
     .max(400, validationMessageSet.maxLength)
     .test('isDate', validationMessageSet.date, (value: any) => miscRegexSet.date.test(value)),

  // 利用終了日_to
  endDateTo: yup
     .string()
     .max(400, validationMessageSet.maxLength)
     .test('isDate', validationMessageSet.date, (value: any) => miscRegexSet.date.test(value)),

  // 申込種別_通常
  applicationTypeNormal: yup
    .string()
    .test('isFlag',validationMessageSet.flag, (value: any) => miscRegexSet.flag.test(value)),

  // 申込種別_就職ナビ(プレ)
  applicationTypeEmploymentNaviPre: yup
    .string()
    .test('isFlag',validationMessageSet.flag, (value: any) => miscRegexSet.flag.test(value)),

  // 申込種別_就職ナビ(本サイト)
  applicationTypeEmploymentNaviMain: yup
    .string()
    .test('isFlag',validationMessageSet.flag, (value: any) => miscRegexSet.flag.test(value)),

  // 申込種別_転職ナビ
  applicatiionTypeJobChangeNavi: yup
    .string()
    .test('isFlag',validationMessageSet.flag, (value: any) => miscRegexSet.flag.test(value)),

  // ステータス_有効
  statusValid: yup
    .string()
    .test('isFlag',validationMessageSet.flag, (value: any) => miscRegexSet.flag.test(value)),

  // ステータス_無効
  statusInvalid: yup
    .string()
    .test('isFlag',validationMessageSet.flag, (value: any) => miscRegexSet.flag.test(value)),
});