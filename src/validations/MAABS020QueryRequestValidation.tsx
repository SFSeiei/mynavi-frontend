/**
 * MAABS020QueryRequestValidation validation
 */

import * as yup from 'yup'
import { miscRegexSet } from 'utils/regex'
import { validationMessageSet } from 'utils/contants'
export const schemaList = yup.object().shape({

  // ログインID
  loginId: yup.string()
  .max(400, validationMessageSet.maxLength)  
  //.test('isHalfWidthAlphanumericSymbol', validationMessageSet.halfWidthAlphanumericSymbol, (value: any) => miscRegexSet.halfWidthAlphanumericSymbol.test(value))
  ,
  
  // 氏名
  name: yup.string()
  .max(400, validationMessageSet.maxLength)
  //.test('isHalfWidth', validationMessageSet.halfWidth, (value: any) => miscRegexSet.halfWidth.test(value))
  ,

  // 部署名
  department: yup
  .string()
  .max(400, validationMessageSet.maxLength)
  //.test('isHalfWidth', validationMessageSet.halfWidth, (value: any) => miscRegexSet.halfWidth.test(value))
  ,

  // メールアドレス
  mailAddress: yup
    .string()
    .max(400, validationMessageSet.maxLength)
    .email(validationMessageSet.email),

  // // 無効ユーザを含む
  invalidUser: yup
    .string()
    .test('isFlag',validationMessageSet.flag, (value: any) => miscRegexSet.flag.test(value)),

  // 権限_システム管理
  authoritySystem: yup
    .string()
    .test('isFlag',validationMessageSet.flag, (value: any) => miscRegexSet.flag.test(value)),

  // 権限_アカウント管理
  authorityAccount: yup
    .string()
    .test('isFlag',validationMessageSet.flag, (value: any) => miscRegexSet.flag.test(value)),

  // 権限_企業向けアナウンス
  authorityannounceForCompany: yup
    .string()
    .test('isFlag',validationMessageSet.flag, (value: any) => miscRegexSet.flag.test(value)),

  // 権限_企業管理
  authorityCompany: yup
    .string()
    .test('isFlag',validationMessageSet.flag, (value: any) => miscRegexSet.flag.test(value)),

  // 権限_企業サポート
  authoritySupport: yup
    .string()
    .test('isFlag',validationMessageSet.flag, (value: any) => miscRegexSet.flag.test(value)),   
  
  // 権限_営業
  authoritySales: yup
    .string()
    .test('isFlag',validationMessageSet.flag, (value: any) => miscRegexSet.flag.test(value)), 
});