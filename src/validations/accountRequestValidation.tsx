import * as yup from 'yup'
import { validationMessageSet } from 'utils/contants'

export default yup.object().shape({
  loginId: yup
    .string()
    .max(20, validationMessageSet.maxLength)
    .required(validationMessageSet.required),
  name: yup
    .string()
    .max(80, validationMessageSet.maxLength)
    .required(validationMessageSet.required),
  department: yup.string().max(80, validationMessageSet.maxLength),
  email: yup
    .string()
    .email(validationMessageSet.email)
    .max(80, validationMessageSet.maxLength)
    .required(validationMessageSet.required),
  permissions: yup.array().required(validationMessageSet.required),
})
