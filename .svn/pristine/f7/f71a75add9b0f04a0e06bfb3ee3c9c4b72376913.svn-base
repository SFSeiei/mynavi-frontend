/**
 * MAACS040QueryRequest validation
 */

import * as yup from 'yup'
import { miscRegexSet } from 'utils/regex'
import { validationMessageSet } from 'utils/contants'

export default yup.object().shape({

  // 企業ID
  clientId: yup
    .string(),

  // 氏名
  fullName: yup
    .string()
    .max(400, validationMessageSet.maxLength)
    .test('isHalfWidth', validationMessageSet.halfWidth, (value: any) => miscRegexSet.halfWidth.test(value)),

  // アカウント種別_統括
  accountTypeSupervising: yup
    .string()
    .test('isFlag',validationMessageSet.flag, (value: any) => miscRegexSet.flag.test(value)),

  // アカウント種別_管理者
  accountTypeAdministrator: yup
    .string()
    .test('isFlag',validationMessageSet.flag, (value: any) => miscRegexSet.flag.test(value)),

  // アカウント種別_準管理者
  accountTypeSemiManager: yup
    .string()
    .test('isFlag',validationMessageSet.flag, (value: any) => miscRegexSet.flag.test(value)),

  // アカウント種別_一般ユーザ
  accountTypeGeneralUser: yup
    .string()
    .test('isFlag',validationMessageSet.flag, (value: any) => miscRegexSet.flag.test(value)),

  // アカウント種別_制限ユーザ
  accountTypeLimitUser: yup
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