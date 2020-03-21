import * as yup from 'yup'
import { validationMessageSet } from 'utils/contants'
import { miscRegexSet } from 'utils/regex'

export default yup.object().shape({
  //ログインID
  loginId: yup
    .string()
    .test('isHalfWidthAlphanumericSymbol', validationMessageSet.halfWidthAlphanumericSymbol, (value: any) => miscRegexSet.halfWidthAlphanumericSymbol.test(value))
    .required(validationMessageSet.required)
    .max(400, validationMessageSet.maxLength),

  //パスワード
  password: yup
    .string()
    .test('isHalfWidthAlphanumericSymbol', validationMessageSet.halfWidthAlphanumericSymbol, (value: any) => miscRegexSet.halfWidthAlphanumericSymbol.test(value))
    .required(validationMessageSet.required)
    .max(400, validationMessageSet.maxLength)
  ,
})
