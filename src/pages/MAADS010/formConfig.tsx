const itemList = [
  { name: 'charge', label: '自分が担当' },
  { name: 'salesStaff', label: '営業担当' },
  { name: 'agency', label: '代理店' },
  { name: 'clientId', label: '企業ID' },
  { name: 'clientName', label: '企業名' },
  { name: 'startDateFrom', label: '利用開始日_from' },
  { name: 'startDateTo', label: '利用開始日_to' },
  { name: 'endDateFrom', label: '利用終了日_from' },
  { name: 'endDateTo', label: '利用終了日_to' },
  { name: 'applicationType', label: '申込種別' },
  { name: 'status', label: 'ステータス' },
]
const applicationTypeList = [
  { name: '0', label: '通常', id: '1' },
  { name: '1', label: '就職ナビ', id: '2' },
  { name: '2', label: '転職ナビ', id: '3' },
]
const statusList = [
  { name: '0', label: '無効', id: '1' },
  { name: '1', label: '有効', id: '2' },
]

const initialValues = {
  charge: '1',
  salesStaff: '',
  managerId: '',
  agency: '',
  clientId: '',
  clientName: '',
  startDateFrom: '',
  startDateTo: '',
  endDateFrom: '',
  endDateTo: '',
  // applicationTypes: [],
  // status: [],
  applicationTypeNormal: '1', //申込種別_通常
  applicationTypeEmploymentNaviPre: '1', //申込種別_就職ナビ(プレ)
  applicationTypeEmploymentNaviMain: '1', //申込種別_就職ナビ(本サイト)
  applicatiionTypeJobChangeNavi: '1', //申込種別_転職ナビ
  statusValid: '1', //ステータス_有効
  statusInvalid: '0',//ステータス_無効
}
const initialDetailValues = {
  // 企業ID
  clientId: '',
  // 企業名
  clientName: '',
  // 営業担当
  salesStaff: '',
  // 営業担当部署
  salesDepartmentName: '',
  // 代理店名
  agencyInformation: '',
  // 企業担当者：部署
  departmentClient: '',
  // 企業担当者：担当者名
  staffNameClient: '',
  // 企業担当者：電話番号
  telClient: '',
  // 企業担当者：メールアドレス
  mailAddressClient: '',
  // 企画種別
  applicationTypeResult: '',
  // 利用開始日
  startTimeResult: '',
  // 利用終了日
  endTimeResult: '',
  // ステータス
  statusResult: '',
}

const messageMap: { [key: string]: string } = {
  enable: '選択されたアカウントを有効にします。よろしいでしょうか？',
  disable: '選択されたアカウントを無効にします。よろしいでしょうか？',
  resetPassword:
    '選択されたアカウントに対し、パスワードを再発行します。よろしいでしょうか？',
}

export { initialValues, applicationTypeList, itemList, statusList, messageMap,initialDetailValues }
