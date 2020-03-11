/**
 * MAAES020CreateRequest
 */
export interface MAAES020CreateRequest {

  // 分類
  // -
  category: string;

  // タイトル
  // -
  subject: string;

  // 本文
  // -
  body: string;

  // 企業ID
  // -
  newsTargetCompany: string[];

  // 公開状態
  // -
  publicFlagPublic: string;

  // 公開開始日
  // -
  publicStartDate: string;

  // 公開終了日
  // -
  publicEndDate: string;

  // 添付ファイル
  // -
  // fileSelected: File[];
}
