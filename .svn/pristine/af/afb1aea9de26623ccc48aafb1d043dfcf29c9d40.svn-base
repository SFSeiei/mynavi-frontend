import * as yup from 'yup'

const itemList = [
  {
    name: 'loginId',
    label: 'ログインID',
    placeholder: '※完全一致',
  },
  { name: 'name', label: '氏名', placeholder: '部分一致' },
  { name: 'department', label: '部署名', placeholder: '部分一致' },
  {
    name: 'mailAddress',
    label: 'メールアドレス',
    placeholder: '※前方一致',
  },
  { name: 'invalidUser', label: '無効ユーザ', placeholder: '' },
]

const permissionList = [
  { name: 'system', label: 'システム管理', id: '10' },
  { name: 'accout', label: 'アカウント管理', id: '20' },
  { name: 'announceForCompany', label: '企業向けアナウンス', id: '30' },
  { name: 'company', label: '企業管理', id: '40' },
  { name: 'support', label: '企業サポート', id: '50' },
  { name: 'sales', label: '営業', id: '60' },
]

const schemaList = yup.object().shape({
  loginId: yup.string().max(20),
  name: yup.string().max(80),
  department: yup.string().max(80),
  email: yup
    .string()
    .email('有効なメールアドレスではありません')
    .max(80),
})

const initialValues = {
  loginId: '',
  name: '',
  department: '',
  mailAddress: '',
  invalidUser: '0',
  authoritySystem: '1',
  authorityAccount: '1',
  authorityannounceForCompany: '1',
  authorityCompany: '1',
  authoritySupport: '1',
  authoritySales: '1',
  permissions: [] as string[],
}

const messageMap: { [key: string]: string } = {
  enable: '選択されたアカウントを有効にします。よろしいでしょうか？',
  disable: '選択されたアカウントを無効にします。よろしいでしょうか？',
  resetPassword:
    '選択されたアカウントに対し、パスワードを再発行します。よろしいでしょうか？',
  disableCheck: '無効対象のユーザは、企業情報の営業担当者に設定されています。無効にしてよろしいですか？',
}

export { initialValues, itemList, permissionList, schemaList, messageMap }
