/**
 * MAAES020CreateRequest validation
 */

import * as yup from 'yup'
import { validationMessageSet } from 'utils/contants'
import { miscRegexSet } from 'utils/regex'

export default yup.object().shape({
  // 分類
  // -
  category: yup
    .number()
    .required(validationMessageSet.required)
    .min(0, validationMessageSet.minValue)
    .max(3, validationMessageSet.maxValue),

  // タイトル
  // -
  subject: yup
    .string()
    .required(validationMessageSet.required)
    .max(400, validationMessageSet.maxLength)
    .test('isHalfWidth', validationMessageSet.halfWidth, (value: any) =>
      miscRegexSet.halfWidth.test(value)
    ),

  // 本文
  // -
  body: yup
    .string()
    .required(validationMessageSet.required)
    .max(20000, validationMessageSet.maxLength)
    .test('isHalfWidth', validationMessageSet.halfWidth, (value: any) =>
      miscRegexSet.halfWidth.test(value)
    ),

  // 企業ID
  // -
  companyId: yup
    .array()
    .of(
      yup
        .string()
        .test(
          'isHalfWidthNumber',
          validationMessageSet.halfWidthNumber,
          (value: any) => miscRegexSet.halfWidthNumber.test(value)
        )
    ),

  // 公開状態
  // -
  publicFlag: yup
    .number()
    .min(0, validationMessageSet.minValue)
    .max(1, validationMessageSet.maxValue),

  // 公開開始日
  // -
  publicStartDate: yup
    .date()
    .required('必須')
    .test(
      'publicStartDate',
      '公開開始日は、公開終了日を超えてはならない',
      function(value: any) {
        const endDateStr = this.parent.publicEndDate
        if (endDateStr) {
          const endDate = new Date(this.parent.publicEndDate)
          const startDate = new Date(value)
          return startDate <= endDate
        } else {
          return true
        }
      }
    ),

  // 公開終了日
  // -
  publicEndDate: yup.date().nullable(),

  // 添付ファイル
  // -
  file: yup
    .mixed()
    .test(
      'sizeLimt',
      validationMessageSet.sizeLimt,
      (value: any) => value && value.size <= 10
    ),
})
