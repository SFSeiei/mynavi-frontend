import * as yup from 'yup'
import { validationMessageSet } from 'utils/contants'

const itemList = (type: string) => {
  const commonList = [
    { name: 'loginId', label: 'ログインID' },
    { name: 'name', label: '名前' },
    { name: 'department', label: '部署名' },
    { name: 'email', label: 'メールアドレス' },
    { name: 'permissions', label: '権限' },
  ]

  if (type === 'edit') {
    return [...commonList, { name: 'status', label: '有効/無効' }]
  }

  return commonList
}

const permissionList = [
  { name: 'system', label: 'システム管理' },
  { name: 'accout', label: 'アカウント管理' },
  { name: 'company', label: '企業管理' },
  { name: 'support', label: '企業サポート' },
  { name: 'sales', label: '営業' },
]

const schemaList = yup.object().shape({
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

const initialValues = {
  loginId: '',
  name: '',
  department: '',
  email: '',
  status: '有効',
  permissions: [] as string[],
}

const textMap = {
  create: {
    title: '社内アカウント登録',
    submit: '登録する',
    message: '入力された内容で登録します。よろしいですか？',
  },
  edit: {
    title: '社内アカウント編集',
    submit: '更新する',
    message: '入力された内容で更新します。よろしいですか？',
  },
}

export { initialValues, itemList, permissionList, schemaList, textMap }
