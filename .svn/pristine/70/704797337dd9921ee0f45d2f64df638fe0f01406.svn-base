import * as yup from 'yup'
import { miscRegexSet } from 'utils/regex'
import { validationMessageSet } from 'utils/contants'

export default yup.object().shape({

  // 企業ID
  // clientId: yup
  //   .string()
  //   .max(400, validationMessageSet.maxLength)
  //   .test('isHalfWidthNumber', validationMessageSet.halfWidthNumber, (value: any) => miscRegexSet.halfWidthNumber.test(value)),
  clientId: yup.lazy(value =>
    value
    ? yup
    .string()
    .max(400, validationMessageSet.maxLength)
    .test('isHalfWidthNumber', validationMessageSet.halfWidthNumber, (value: any) => miscRegexSet.halfWidthNumber.test(value))
    :yup.mixed().notRequired()),


  // 企業名
  clientName: yup
    .string()
    .max(400, validationMessageSet.maxLength)
    .test('isHalfWidth', validationMessageSet.halfWidth, (value: any) => miscRegexSet.halfWidth.test(value)),

  // 管理者ID
  adminId: yup
    .string(),

  // 営業担当者
  salesStaffName: yup
    .string()
    .max(400, validationMessageSet.maxLength)
    .test('isHalfWidth', validationMessageSet.halfWidth, (value: any) => miscRegexSet.halfWidth.test(value)),

  // メールアドレス（企業）
  mailAddressClient: yup
    .string()
    .max(400, validationMessageSet.maxLength)
    .test('isHalfWidthAlphanumericSymbol', validationMessageSet.halfWidthAlphanumericSymbol, (value: any) => miscRegexSet.halfWidthAlphanumericSymbol.test(value)),

  // ステータス_有効
  statusValid: yup
    .string()
    .test('isFlag',validationMessageSet.flag, (value: any) => miscRegexSet.flag.test(value)),

  // ステータス_無効
  statusInvalid: yup
    .string()
    .test('isFlag',validationMessageSet.flag, (value: any) => miscRegexSet.flag.test(value)),
});