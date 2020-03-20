const statusList = [
  { name: '10', label: '無効', id: '1' },
  { name: '20', label: '有効', id: '2' },
];

const loginClickData = {
  companyId: 0,
  managerId: ''
};

const clientIdRequestData  = {
  companyId: 0,
  companyContractMediaId: '',
  companyStaffDepartmentName: '',
  companyStaffName: '',
  mailAddress: '',
  companyAccountId: '',
  sysVersionNumber: '',
};
const initialSeachData = {
  clientId: '',
  clientName: '',
  salesStaffName: '',
  adminId: '',
  mailAddressClient: '',
  statusValid: '1',
  statusInvalid: '0'
};
const rowDateInit = {
  companyId: 0, //企業ID
  companyName: '', //企業名
  currentlyInUse: '', //現在の利用状況
  currentlyInUseName: '',//現在の利用状況Name
  companyStaffDepartmentName: '', //企業担当者：部署
  companyStaffName: '', //企業担当者：担当者名
  salesStaffInChargeName: '', //営業担当者
  status: '', //ステータス
  statusName: '', //ステータスName
  accountIssuanceStatement: '', //アカウント発行状況
  accountIssuanceStatementName: '', //アカウント発行状況Name
  managerId: '', //管理者ID
  mailAddress: '', //メールアドレス
  companyAccountId: '', //企業アカウントID
  companyContractMediaId: '', //企業契約媒体ID
  sysVersionNumber: '', //sysバージョン番号
};
function messageData ( type: string, clientId:string, clientName:string ) {
  let messageData: string = "";
  if ( type === 'login' ) {
    messageData = '選択した企業にログインします。よろしいですか？<br/>企業ID：'+clientId+'<br/>企業名：'+clientName;
     return messageData;
  }else if ( type === 'accountIssuance' ) {
    messageData = '選択した企業のアカウントを発行します。よろしいですか？<br/>企業ID：'+clientId+'<br/>企業名：'+clientName;
    return messageData;
  }else {
    messageData = '選択した企業のアカウントに対して、仮パスワードを発行します。よろしいですか？<br/>企業ID：'+clientId+'<br/>企業名：'+clientName;
    return messageData;
  }
}

export { initialSeachData, statusList, rowDateInit, messageData,clientIdRequestData,loginClickData };
