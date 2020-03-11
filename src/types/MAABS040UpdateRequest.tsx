/**
 * MAABS040UpdateRequest
 */

export interface Permission {
  [key: string]: string | null
  id: string
  name: string
  sortOrder: string | null
  status: string | null
}
export  default interface MAABS040UpdateRequest {

  // 管理者ID
  managerId: string;

  // ログインID
  loginId: string;

  // 氏名
  name: string;

  // 部署名
  department: string;

  // メールアドレス
  mailAddress: string;

  // 無効ユーザを含む
  status: number;

  // 権限_システム管理
  authoritySystem: string;

  // 権限_アカウント管理
  authorityAccount: string;

  // 権限_企業向けアナウンス
  authorityannounceForCompany: string;

  // 権限_企業管理
  authorityCompany: string;

  // 権限_企業サポート
  authoritySupport: string;

  // 権限_営業
  authoritySales: string;  

  // バージョン
  sysVersionNumberAdmin: number;   

  permissions: Permission[] //権限
}
