/**
 * MAAES030UpdateRequest
 */
export interface MAAES030UpdateRequest {
  // お知らせID
  newsId: number

  // お知らせ情報バージョン
  newsSysVersionNumber: number

  // 分類
  category: string

  // タイトル
  subject: string

  // 本文
  body: string

  // 企業ID
  companyId: string[]

  // 公開状態
  publicFlag: string

  // 公開開始日
  publicStartDate: string

  // 公開終了日
  publicEndDate: string

  // 添付ファイル
  file: File[]

}
