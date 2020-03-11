/**
 * MAABS010PasswordRequest validation
 */

import { validationMessageSet } from 'utils/contants'
import { miscRegexSet } from 'utils/regex'
import * as yup from 'yup'

export const validationSchemaAll = yup.object().shape({
  // 現パスワード
  currentPassword: yup
    .string()
    .max(400, validationMessageSet.maxLength)
    .test('isHalfWidthAlphanumericSymbol', validationMessageSet.halfWidthAlphanumericSymbol, (value: any) => miscRegexSet.halfWidthAlphanumericSymbol.test(value))
    .required(validationMessageSet.required),

  // 新パスワード
  newPassword: yup
    .string()
    .max(400, validationMessageSet.maxLength)
    .test('isHalfWidthAlphanumericSymbol', validationMessageSet.halfWidthAlphanumericSymbol, (value: any) => miscRegexSet.halfWidthAlphanumericSymbol.test(value))
    .required(validationMessageSet.required),

  // 新パスワード（確認用）
  newPasswordConfirm: yup
    .string()
    .max(400, validationMessageSet.maxLength)
    .test('isHalfWidthAlphanumericSymbol', validationMessageSet.halfWidthAlphanumericSymbol, (value: any) => miscRegexSet.halfWidthAlphanumericSymbol.test(value))
    .required(validationMessageSet.required)
    .oneOf(
      [yup.ref('newPassword')],
      validationMessageSet.newPassword
    )
})

export const validationSchemaMo = yup.object().shape({
  // 現パスワード
  currentPassword: yup
    .string(),

  // 新パスワード
  newPassword: yup
    .string()
    .max(400, validationMessageSet.maxLength)
    .test('isHalfWidthAlphanumericSymbol', validationMessageSet.halfWidthAlphanumericSymbol, (value: any) => miscRegexSet.halfWidthAlphanumericSymbol.test(value))
    .required(validationMessageSet.required),

  // 新パスワード（確認用）
  newPasswordConfirm: yup
    .string()
    .max(400, validationMessageSet.maxLength)
    .test('isHalfWidthAlphanumericSymbol', validationMessageSet.halfWidthAlphanumericSymbol, (value: any) => miscRegexSet.halfWidthAlphanumericSymbol.test(value))
    .required(validationMessageSet.required)
    .oneOf(
      [yup.ref('newPassword')],
      validationMessageSet.newPassword
    )
})
