/**
 * MAACS020CreateRequest validation
 */

import * as yup from 'yup'
import { miscRegexSet } from 'utils/regex'
import { validationMessageSet } from 'utils/contants'

export default yup.object().shape({

  // 企業名
  clientName: yup
    .string()
    .required(validationMessageSet.required)
    .max(200, validationMessageSet.maxLength),
    // .test('isHalfWidth', validationMessageSet.halfWidth, (value: any) => miscRegexSet.halfWidth.test(value)),

  // 企業名カナ
  clientNameFurigana: yup
    .string()
    .required(validationMessageSet.required)
    .max(200, validationMessageSet.maxLength)
    .test('isFullWidthKana', validationMessageSet.fullWidthKana, (value: any) => miscRegexSet.fullWidthKana.test(value)),

  // 郵便番号
  postalCode: yup
    .string()
    .required(validationMessageSet.required)
    .max(7, validationMessageSet.maxLength)
    .test('isPostalCode', validationMessageSet.postalCode, (value: any) => miscRegexSet.postalCode.test(value)),

  // 住所
  streetAddress: yup
    .string()
    .required(validationMessageSet.required)
    .max(140, validationMessageSet.maxLength),
    // .test('isHalfWidth', validationMessageSet.halfWidth, (value: any) => miscRegexSet.halfWidth.test(value)),

  // 電話番号
  tel: yup
    .string()
    .required(validationMessageSet.required)
    .max(100, validationMessageSet.maxLength)
    .test('isPhoneNumber', validationMessageSet.phoneNumber, (value: any) => miscRegexSet.phoneNumber.test(value)),

  // 企業担当者：部署_就職担当者
  clientStaffDepartmentNameEmployment: yup
    .string()
    .max(100, validationMessageSet.maxLength),
    // .test('isHalfWidth', validationMessageSet.halfWidth, (value: any) => miscRegexSet.halfWidth.test(value)),

  // 企業担当者：役職_就職担当者
  clientStaffPositionNameEmployment: yup
    .string()
    .max(50, validationMessageSet.maxLength),
    // .test('isHalfWidth', validationMessageSet.halfWidth, (value: any) => miscRegexSet.halfWidth.test(value)),

  // 企業担当者：担当者名_就職担当者
  clientStaffNameEmployment: yup
    .string()
    .max(100, validationMessageSet.maxLength),
    // .test('isHalfWidth', validationMessageSet.halfWidth, (value: any) => miscRegexSet.halfWidth.test(value)),

  // 企業担当者：担当者名カナ_就職担当者
  clientStaffNameFuriganaEmployment: yup.lazy(value =>
    value
    ? yup
    .string()
    .max(100, validationMessageSet.maxLength)
    .test('isFullWidthKana', validationMessageSet.fullWidthKana, (value: any) => miscRegexSet.fullWidthKana.test(value))
    :yup.mixed().notRequired()),
    
  // 企業担当者：メールアドレス_就職担当者
  clientStaffEmailEmployment: yup.lazy(value =>
    value
    ? yup
    .string()
    .max(256, validationMessageSet.maxLength)
    .email(validationMessageSet.email)
    :yup.mixed().notRequired()),

  // 営業担当者_就職担当者
  // salesStaffEmployment: yup
  //   .string()
  //   .max(100, validationMessageSet.maxLength),
    // .test('isHalfWidth', validationMessageSet.halfWidth, (value: any) => miscRegexSet.halfWidth.test(value)),

  // 営業部署名_就職担当者
  salesDepartmentNameEmployment: yup
    .string(),

  // 企業担当者：部署_転職担当者
  clientStaffDepartmentJobChange: yup
    .string()
    .max(100, validationMessageSet.maxLength),
    // .test('isHalfWidth', validationMessageSet.halfWidth, (value: any) => miscRegexSet.halfWidth.test(value)),

  // 企業担当者：役職_転職担当者
  clientStaffPositionJobChange: yup
    .string()
    .max(50, validationMessageSet.maxLength),
    // .test('isHalfWidth', validationMessageSet.halfWidth, (value: any) => miscRegexSet.halfWidth.test(value)),

  // 企業担当者：担当者名_転職担当者
  clientStaffNameJobChange: yup
    .string()
    .max(100, validationMessageSet.maxLength),
    // .test('isHalfWidth', validationMessageSet.halfWidth, (value: any) => miscRegexSet.halfWidth.test(value)),

  // 企業担当者：担当者名カナ_転職担当者
  clientStaffNameFuriganaJobChange: yup.lazy(value =>
    value
    ? yup
    .string()
    .max(100, validationMessageSet.maxLength)
    .test('isFullWidthKana', validationMessageSet.fullWidthKana, (value: any) => miscRegexSet.fullWidthKana.test(value))
    :yup.mixed().notRequired()),

  // 企業担当者：メールアドレス_転職担当者
  clientStaffEmailJobChange: yup.lazy(value =>
    value
    ? yup
    .string()
    .max(256, validationMessageSet.maxLength)
    .email(validationMessageSet.email)
    :yup.mixed().notRequired()),

  // 営業担当者_転職担当者
  // salesStaffJobChange: yup
  //   .string()
  //   .max(100, validationMessageSet.maxLength),
    // .test('isHalfWidth', validationMessageSet.halfWidth, (value: any) => miscRegexSet.halfWidth.test(value)),

  // 営業部署名_転職担当者
  salesDepartmentNameJobChange: yup
    .string(),

  // 企業担当者：部署_Magi担当者
  clientStaffDepartmentMagi: yup
    .string()
    .max(100, validationMessageSet.maxLength),
    // .test('isHalfWidth', validationMessageSet.halfWidth, (value: any) => miscRegexSet.halfWidth.test(value)),

  // 企業担当者：役職_Magi担当者
  clientStaffPositionMagi: yup
    .string()
    .max(50, validationMessageSet.maxLength),
    // .test('isHalfWidth', validationMessageSet.halfWidth, (value: any) => miscRegexSet.halfWidth.test(value)),

  // 企業担当者：担当者名_Magi担当者
  clientStaffNameMagi: yup
    .string()
    .required(validationMessageSet.required)
    .max(100, validationMessageSet.maxLength),
    // .test('isHalfWidth', validationMessageSet.halfWidth, (value: any) => miscRegexSet.halfWidth.test(value)),

  // 企業担当者：担当者名カナ_Magi担当者
  clientStaffNameFuriganaMagi: yup.lazy(value =>
    value
    ? yup
    .string()
    .max(100, validationMessageSet.maxLength)
    .test('isFullWidthKana', validationMessageSet.fullWidthKana, (value: any) => miscRegexSet.fullWidthKana.test(value))
    :yup.mixed().notRequired()),

  // 企業担当者：メールアドレス_Magi担当者
  clientStaffEmailMagi: yup
    .string()
    .required(validationMessageSet.required)
    .max(256, validationMessageSet.maxLength)
    .email(validationMessageSet.email),

  // 営業担当者_Magi担当者
  // salesStaffMagi: yup
  //   .string()
  //   .max(100, validationMessageSet.maxLength),
    // .test('isHalfWidth', validationMessageSet.halfWidth, (value: any) => miscRegexSet.halfWidth.test(value)),

  // 営業部署名_Magi担当者
  salesDepartmentNameMagi: yup
    .string(),

  // ログイン許可IPアドレス
  loginPermissionIpAddress: yup
    .string()
    .test('isHalfWidth', validationMessageSet.halfWidth, (value: any) => miscRegexSet.halfWidth.test(value)),

  // ログイン許可IPアドレスv6
  loginPermissionIpAddressV6: yup
    .string()
    .test('isHalfWidth', validationMessageSet.halfWidth, (value: any) => miscRegexSet.halfWidth.test(value)),

  // 備考
  remarks: yup
    .string()
    .max(500, validationMessageSet.maxLength),
    // .test('isHalfWidth', validationMessageSet.halfWidth, (value: any) => miscRegexSet.halfWidth.test(value)),
});