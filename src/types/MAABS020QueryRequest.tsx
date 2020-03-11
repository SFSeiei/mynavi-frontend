/**
 * MAABS020QueryRequest
 */
export  interface MAABS020QueryRequest {

  // ログインID
  loginId: string;

  // 氏名
  name: string;

  // 部署名
  department: string;

  // メールアドレス
  mailAddress: string;

  // 無効ユーザを含む
  invalidUser: string;

  //システム管理
  authoritySystem: string;

  //アカウント管理
  authorityAccount: string;

  //企業向けアナウンス
  authorityannounceForCompany: string;
  
  //企業管理
  authorityCompany: string;
  
  //企業サポート
  authoritySupport: string;
  
  //営業
  authoritySales: string;  

  permissions: string[] //権限
}
