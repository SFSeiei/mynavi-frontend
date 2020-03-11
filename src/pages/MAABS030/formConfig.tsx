import * as yup from 'yup'

const itemList = (type: string) => {
  const commonList = [
    { name: 'loginId', label: 'ログインID' },
    { name: 'name', label: '名前' },
    { name: 'department', label: '部署名' },
    { name: 'mailAddress', label: 'メールアドレス' },
  ]

  return commonList
}

const permissionList1 = [
  { name: 'authoritySystem', label: 'システム管理', id: '10' },
  { name: 'authorityAccount', label: 'アカウント管理', id: '20' },
  { name: 'authorityannounceForCompany', label: '企業向けアナウンス', id: '30' },
  { name: 'authorityCompany', label: '企業管理', id: '40' },
  { name: 'authoritySupport', label: '企業サポート', id: '50' },
  { name: 'authoritySales', label: '営業', id: '60' },
]

const permissionList2 = [
  { name: 'authorityAccount', label: 'アカウント管理', id: '20' },
  { name: 'authorityannounceForCompany', label: '企業向けアナウンス', id: '30' },
  { name: 'authorityCompany', label: '企業管理', id: '40' },
  { name: 'authoritySupport', label: '企業サポート', id: '50' },
  { name: 'authoritySales', label: '営業', id: '60' },
]


const schemaList = yup.object().shape({
  loginId: yup
    .string()
    .max(20)
    .required('必須'),
  name: yup
    .string()
    .max(80)
    .required('必須'),
  department: yup.string().max(80),
  mailAddress: yup
    .string()
    .email('有効なメールアドレスではありません')
    .max(80)
    .required('必須'),
  permissions: yup.array().required('権限が１つも選択されていません。'),
})

const initialValues = {
  loginId: '',
  name: '',
  department: '',
  mailAddress: '',
  status: '有効',
  authoritySystem: '0',
  authorityAccount: '0',
  authorityannounceForCompany: '0',
  authorityCompany: '0',
  authoritySupport: '0',
  authoritySales: '0',
  permissions: [] as string[],
}
const initialValuesCreate = {
  authSystemFlag: '', //システム管理フラグ
  authAccountFlag: '', //アカウント管理フラグ
  authannounceForCompanyFlag: '', //企業向けアナウンスフラグ
  authCompanyFlag: '', //企業管理フラグ
  authSupportFlag: '', //企業サポートフラグ
  authSalesFlag: '', //営業フラグ
}
const textMap = {
  create: {
    submit: '登録する',
    message: '入力された内容で登録します。よろしいですか？',
  },
  delete: {
    submit: '削除する',
    message: 'このアカウントを削除します。よろしいですか？',
  },
}

export { initialValues, initialValuesCreate, itemList, permissionList1,permissionList2, schemaList, textMap }
