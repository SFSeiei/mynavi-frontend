/**
 * MAAES020CreateRequest validation
 */

import * as yup from 'yup'
import { number } from '@lingui/macro'
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
  fileSelected: yup
    // .array().of(yup.mixed().test(
    //   'ファイル拡張子',
    // '非対応のファイルが含まれています。',
    // // '添付ファイル拡張子: doc,gif,jpg,jpeg,pdf,png,pps,ppt,pptx,txt,xls,docx,xlsx',
    // (file: File) => {
    //     let fileType = file.name.split('.')[file.name.split('.').length - 1]
    //     debugger
    //     return 'doc,gif,jpg,jpeg,pdf,png,pps,ppt,pptx,txt,xls,docx,xlsx'.includes(fileType)
    //   }))
    .mixed()
    // .test(
    //   'sizeLimt',
    //   validationMessageSet.sizeLimt,
    //   (value: any) => value && value.size <= 10
    // ),
    // .test(
    //   'fileSelected',
    //   '添付ファイルサイズ上限: 10MB/件',
    //   (fileList: File[]) =>
    //     fileList.every((file: File) => file.size <= 1024 * 1024 * 10)
    // ),
    // .test(
    //   'fileSelected',
    //   '非対応のファイルが含まれています。',
    //   // '添付ファイル拡張子: doc,gif,jpg,jpeg,pdf,png,pps,ppt,pptx,txt,xls,docx,xlsx',
    //   (fileList: File[]) => {
    //     const result = fileList.every((file: File) => {
    //       const fileType = file.name.split('.')[file.name.split('.').length - 1]
    //       return 'doc,gif,jpg,jpeg,pdf,png,pps,ppt,pptx,txt,xls,docx,xlsx'.includes(
    //         fileType
    //       )
    //     })
    //     return result
    //   }
    // )
    // .test(
    //   'ファイル数上限',
    //   'ファイル数の上限が超えました。',
    //   // '添付ファイル数上限: 10',
    //   (fileList: File[]) => {
    //     return fileList && fileList.length <= 10
    //   }
    // ),
})
