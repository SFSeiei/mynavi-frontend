/**
 * MAABS040UpdateRequest validation
 */

import * as yup from 'yup'
import { miscRegexSet } from 'utils/regex'
import { validationMessageSet } from 'utils/contants'


export default yup.object().shape({
  // 管理者ID  
  managerId: yup
    .string()
    .required(validationMessageSet.required),

  // ログインID    
  loginId: yup
    .string()
    .max(20, validationMessageSet.maxLength)
    .required(validationMessageSet.required)
    .test('isHalfWidthAlphanumericSymbol', validationMessageSet.halfWidthAlphanumericSymbol, (value: any) => miscRegexSet.halfWidthAlphanumericSymbol.test(value))
    ,

  // 氏名    
  name: yup
    .string()
    .max(100, validationMessageSet.maxLength)
    .required(validationMessageSet.required)
    .test('isHalfWidth', validationMessageSet.halfWidth, (value: any) => miscRegexSet.halfWidth.test(value))
    ,

  // 部署名    
  department: yup
  .string()
  .max(100, validationMessageSet.maxLength)
  .test('isHalfWidth', validationMessageSet.halfWidth, (value: any) => miscRegexSet.halfWidth.test(value))
  ,

  // メールアドレス  
  mailAddress: yup
    .string()
    .max(256, validationMessageSet.maxLength)
    .email(validationMessageSet.email)
    .required(validationMessageSet.required),

  // 有効／無効
  status: yup
    .number()
    .min(0, validationMessageSet.minValue)
    .max(1, validationMessageSet.maxValue),

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
   
})
