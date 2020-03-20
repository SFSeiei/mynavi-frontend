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
  newsTargetCompany: yup
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
  publicFlagPublic: yup
    .number()
    .min(0, validationMessageSet.minValue)
    .max(1, validationMessageSet.maxValue),

  // 公開開始日
  // -
  publicStartDate: yup
    .string()
    .required(validationMessageSet.required)
    .max(10, validationMessageSet.maxLength)
    .test('isDate', validationMessageSet.date, (value: any) =>
      miscRegexSet.date.test(value)
    ),

  // 公開終了日
  // -
  publicEndDate: yup
    .string()
    .nullable()
    .max(10, validationMessageSet.maxLength)
    .test('isDate', validationMessageSet.date, (value: any) =>
      miscRegexSet.date.test(value)
    ),

  // 添付ファイル
  // -
  fileSelected: yup
    .mixed()
    .test(
      'fileSelected',
      '添付ファイルサイズ上限: 10MB/件',
      (fileList: File[]) =>
        fileList.every((file: File) => file.size <= 1024 * 1024 * 10)
    ),
})
