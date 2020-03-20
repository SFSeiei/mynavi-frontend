/**
 * MAABS010PasswordRequest
 */
export default interface MAABS010PasswordRequest {
  //遷移元フラグ
  transitionSourceFlag: string;

  //管理者ID
  managerId : string;
  
  // 現パスワード
  currentPassword: string;

  // 新パスワード
  newPassword: string;

  // 新パスワード（確認用）
  newPasswordConfirm: string;

  // システムバージョン
  sysVersion: string;
}
