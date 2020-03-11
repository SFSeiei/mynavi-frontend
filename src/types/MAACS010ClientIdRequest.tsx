/**
 * ClientIdRequest
 */
export default interface ClientIdRequest {
  // 企業ID
  companyId: number;
  // 企業契約媒体ID
  companyContractMediaId : String;
  // 企業担当者：部署
  companyStaffDepartmentName : String;
  // 企業担当者：担当者名
  companyStaffName : String;
  // 企業担当者メールアドレス
  mailAddress : String;
  // sysバージョン番号
  sysVersionNumber : String;
  // 企業アカウントID
  companyAccountId : String;  
}
