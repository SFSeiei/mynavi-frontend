import * as yup from 'yup'
import { validationMessageSet } from 'utils/contants'

export const validationSchema = yup.object().shape({
  loginId: yup.string().required(validationMessageSet.required),
  password: yup.string().required(validationMessageSet.required),
})

export const fieldList = [
  { label: 'ログインID', name: 'loginId' },
  { label: 'パスワード', name: 'password', type: 'password' },
]

export const initialValues = {
  loginId: '',
  password: '',
}