
const itemList = [
  { name: 'clientId', label: '企業ID' },
  { name: 'clientName', label: '企業名' },
  { name: 'fullName', label: '氏名' },
  { name: 'accountArray', label: 'アカウント種別' },
  { name: 'statusArray', label: 'ステータス' },
];

const accountList = [
  { name: '0', label: '統括', id: 'accountTypeSupervising' },
  { name: '10', label: '管理者', id: 'accountTypeAdministrator' },
  { name: '20', label: '準管理者', id: 'accountTypeSemiManager' },
  { name: '30', label: '一般ユーザ', id: 'accountTypeGeneralUser' },
  { name: '40', label: '制限ユーザ', id: 'accountTypeLimitUser' },
];

const statusList = [
  { name: '1', label: '有効', id: 'statusValid' },
  { name: '0', label: '無効', id: 'statusInvalid' },
]

const initialValues = {
  clientId: '',
  clientName: '',
  fullName: '', 
  accountTypeSupervising: '',
  accountTypeAdministrator: '',
  accountTypeSemiManager: '',
  accountTypeGeneralUser: '',
  accountTypeLimitUser: '',
  statusValid: '0',
  statusInvalid: '0',
};

const rowDateInitialValues = {
  loginId: '', //ログインID
  fullName: '', //氏名
  department: '', //部署
  mailAddress: '', //メールアドレス
  phoneNumber: '', //電話番号
  contractMediaName: '', //媒体名
  accountType: '', //アカウント種別
  recruitmentGroupName: '', //採用グループ名
  validFlag: '', //有効フラグ
  lastLoginTime: '', //最終ログイン日時
  companyAccountId: '', //企業アカウントID
  sysVersionNumber: '', //sysバージョン番号
}


function messageData (loginId:string, fullName:string ) {
  let messageData: string = "";
  messageData = '選択した企業アカウントに対して、仮パスワードを発行します。よろしいですか？<br/>ログインID：'+loginId+'<br/>氏名：'+fullName;
  return messageData;
}


export { initialValues, itemList, accountList,statusList, messageData, rowDateInitialValues };
