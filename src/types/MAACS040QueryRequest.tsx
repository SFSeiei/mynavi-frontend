/**
 * MAACS040QueryRequest
 */
export interface MAACS040QueryRequest {
    [key: string]: any;

    // 企業ID
    clientId: string;

    //企業名
    clientName: string;
  
    // 氏名
    fullName: string;

    //アカウント種別
    // accountArray:string[];

    //ステータス
    // statusArray: string[];
    
    // アカウント種別_統括
    accountTypeSupervising: string;
  
    // アカウント種別_管理者
    accountTypeAdministrator: string;
  
    // アカウント種別_準管理者
    accountTypeSemiManager: string;
  
    // アカウント種別_一般ユーザ
    accountTypeGeneralUser: string;
  
    // アカウント種別_制限ユーザ
    accountTypeLimitUser: string;
  
    // ステータス_有効
    statusValid: string;
  
    // ステータス_無効
    statusInvalid: string;
  }
  