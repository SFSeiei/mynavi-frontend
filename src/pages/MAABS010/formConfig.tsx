export const fieldList = [
  { label: '現パスワード', name: 'currentPassword', type: 'password' },
  { label: '新パスワード', name: 'newPassword', type: 'password' },
  {
    label: '新パスワード（確認）',
    name: 'newPasswordConfirm',
    type: 'password',
  },
]
export const initialValues = {
  oldPassword: '',
  newPassword: '',
  newPasswordConfirm: '',
}
