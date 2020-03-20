const itemList = (type: string) => {
  const commonList = [
    { name: 'managerId', label: '管理者ID' },   
    { name: 'loginId', label: 'ログインID' },
    { name: 'name', label: '名前' },
    { name: 'department', label: '部署名' },
    { name: 'mailAddress', label: 'メールアドレス' },
    { name: 'status', label: '有効/無効' },
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
const statusRadioList = [
  { id: 'statusValid', label: '有効', value: '1' },
  { id: 'statusInvalid', label: '無効', value: '0' },
]
const initialValuesD = {
    managerId: 0, //管理者ID
    loginId: '', //ログインID
    fullName: '', //氏名
    name: '', //氏名
    departmentName: '', //部署名
    department: '', //部署名
    mailAddress: '', //メールアドレス
    email: '', //メールアドレス
    status: '',//ステータス
    statusOld: '',//ステータスチェック用
    authorityName: '', //権限
    authoritySystem: '', //システム管理
    authorityAccount: '', //アカウント管理
    authorityannounceForCompany: '', //企業向けアナウンス
    authorityCompany: '', //企業管理
    authoritySupport: '', //企業サポート
    authoritySales: '', //営業
    permissions:  [] as string[], //権限
    authoritySystemFlag: '', //システム管理権限フラグ
    authSystemFlag: '', //システム管理フラグ
    authAccountFlag: '', //アカウント管理フラグ
    authannounceForCompanyFlag: '', //企業向けアナウンスフラグ
    authCompanyFlag: '', //企業管理フラグ
    authSupportFlag: '', //企業サポートフラグ
    authSalesFlag: '', //営業フラグ
    authSystemFlagOld: '', //システム管理フラグチェック用
    authAccountFlagOld: '', //アカウント管理フラグチェック用
    authannounceForCompanyFlagOld: '', //企業向けアナウンスフラグチェック用
    authCompanyFlagOld: '', //企業管理フラグチェック用
    authSupportFlagOld: '', //企業サポートフラグチェック用
    authSalesFlagOld: '', //営業フラグチェック用
    sysVersionNumberAdmin:  0,//sysバージョン番号
  }

const textMap = {
  edit: {
    submit: '更新する',
    message: '入力された内容で更新します。よろしいですか？',
  },
  delete: {
    submit: '削除する',
    message: 'このアカウントを削除します。よろしいですか？',
  },
  cancel: {
    submit: 'キャンセルする',
    message: '編集された内容を破棄し、画面を移動します。よろしいでしょうか？',
  },
}

export { initialValuesD, itemList, permissionList1, permissionList2, textMap, statusRadioList }
