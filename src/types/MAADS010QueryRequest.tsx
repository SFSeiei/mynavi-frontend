/**
 * MAADS010QueryRequest
 */
export interface MAADS010QueryRequest {

  // 自分が担当
  charge: string;

  // 管理者ID
  managerId: string;
  
  // 営業担当
  salesStaff: string;

  // 代理店
  agency: string;

  // 企業ID
  clientId: string;

  // 企業名
  clientName: string;

  // 利用開始日_from
  startDateFrom: string;

  // 利用開始日_to
  startDateTo: string;

  // 利用終了日_from
  endDateFrom: string;

  // 利用終了日_to
  endDateTo: string;

  // 申込種別_通常
  applicationTypeNormal: string;

  // 申込種別_就職ナビ(プレ)
  applicationTypeEmploymentNaviPre: string;

  // 申込種別_就職ナビ(本サイト)
  applicationTypeEmploymentNaviMain: string;

  // 申込種別_転職ナビ
  applicatiionTypeJobChangeNavi: string;

  // ステータス_有効
  statusValid: string;

  // ステータス_無効
  statusInvalid: string;
}
