const manipulationTypeList = [
  { name: '00150', label: 'Magi 企業ログイン', id: '1' },
  { name: '00160', label: 'Magi 企業ログアウト', id: '2' },
  { name: '00170', label: '利用規約への同意', id: '3' },
  { name: '00180', label: '追加アカウント連携', id: '4' },
  { name: '00190', label: 'エントリー情報アップロード', id: '5' },
  { name: '00200', label: 'エントリー検索', id: '6' },
  { name: '00210', label: 'エントリ－情報取込', id: '7' },
  { name: '00220', label: 'エントリー情報閲覧', id: '8' },
  { name: '00230', label: 'エントリー情報更新', id: '9' },
  { name: '00240', label: 'エントリー情報添付ファイル削除', id: '10' },
  { name: '00250', label: 'エントリー情報一括CSV出力', id: '11' },
  { name: '00260', label: 'エントリー情報PDF出力', id: '12' },
  { name: '00270', label: 'エントリー情報一括PDF出力', id: '13' },
  { name: '00280', label: 'メッセージ送信', id: '14' },
  { name: '00290', label: 'メッセージ一括送信', id: '15' },
  { name: '00300', label: '添付ファイルダウンロード', id: '16' },
  { name: '00310', label: 'メッセージ削除', id: '17' },
  { name: '00320', label: 'メッセージ送信（API）', id: '18' },
  { name: '00330', label: 'メッセージ受信（API）', id: '19' },
  { name: '00340', label: '予約メッセージキャンセル', id: '20' },
  { name: '00350', label: '進捗更新', id: '21' },
  { name: '00360', label: '一括進捗更新', id: '22' },
  { name: '00370', label: '内定通知書出力', id: '23' },
  { name: '00380', label: '連携サイトアカウントでのログイン（シングルサインオン）', id: '24' },
  { name: '00390', label: 'マイキャリアボックス提出依頼', id: '25' },

];
const hourList = [
  { name: '0', label: '0'},
  { name: '1', label: '1'},
  { name: '2', label: '2'},
  { name: '3', label: '3'},
  { name: '4', label: '4'},
  { name: '5', label: '5'},
  { name: '6', label: '6'},
  { name: '7', label: '7'},
  { name: '8', label: '8'},
  { name: '9', label: '9'},
  { name: '10', label: '10'},
  { name: '11', label: '11'},
  { name: '12', label: '12'},
  { name: '13', label: '13'},
  { name: '14', label: '14'},
  { name: '15', label: '15'},
  { name: '16', label: '16'},
  { name: '17', label: '17'},
  { name: '18', label: '18'},
  { name: '19', label: '19'},
  { name: '20', label: '20'},
  { name: '21', label: '21'},
  { name: '22', label: '22'},
  { name: '23', label: '23'},
];

const initialValues = {
  clientId: '',
  clientName: '',
  loginId: '',
  fullName: '',
  ipAddress: '',
  usagePeriodFromYMD: '',
  usagePeriodFromH: '',
  usagePeriodToYMD: '',
  usagePeriodToH: '',
  // manipulationType: [] as string[],
  manipulationTypeMagiCompanyLogin: '0', //Magi 企業ログイン
  manipulationTypeMagiCompanyLogout:'0',//Magi 企業ログアウト
  manipulationTypeTermsAgree:'0', //利用規約への同意
  manipulationTypeCoordinationComanyAccount:'0', //追加アカウント連携
  manipulationTypeEntryUpload:'0', //エントリー情報アップロード
  manipulationTypeEntrySearch:'0', //エントリー検索
  manipulationTypeEntryImport:'0', //エントリ－情報取込
  manipulationTypeEntryView:'0', //エントリー情報閲覧
  manipulationTypeEntryUpdate:'0', //エントリー情報更新
  manipulationTypeEntryDelete:'0', //エントリー情報添付ファイル削除
  manipulationTypeEntryBulkCsvOutput:'0', //エントリー情報一括CSV出力
  manipulationTypeEntryPdfOutput:'0', //エントリー情報PDF出力
  manipulationTypeEntryBulkPdfOutput:'0', //エントリー情報一括PDF出力
  manipulationTypeMessageSend:'0', //メッセージ送信
  manipulationTypeBulkMessageSend:'0', //メッセージ一括送信
  manipulationTypeFileDownload:'0', //添付ファイルダウンロード
  manipulationTypeMessageDelete:'0', //メッセージ削除
  manipulationTypeMessageSendApi:'0', //メッセージ送信（API）
  manipulationTypeMessageReceiveApi:'0', //メッセージ受信（API）
  manipulationTypeMessageCancel:'0', //予約メッセージキャンセル
  manipulationTypeProgressUpdate:'0', //進捗更新
  manipulationTypeBulkProgressUpdate:'0', //一括進捗更新
  manipulationTypeInformalOfferOutput:'0', //内定通知書出力
  manipulationTypeLoginSso:'0', //連携サイトアカウントでのログイン（シングルサインオン）
  manipulationTypeSubmissionRequestMcb:'0', //マイキャリアボックス提出依頼
};

export { initialValues, manipulationTypeList, hourList};