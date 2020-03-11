export const validationMessageSet = {
  required: () => '必須',
  maxLength: ({ max }: any) => `長さは${max}文字以下必要です`,
  minLength: ({ min }: any) => `長さは${min}文字以上必要です`,
  maxValue: ({ max }: any) => `値は${max}以下必要です`,
  minValue: ({ min }: any) => `値は${min}以上必要です`,
  equalValue: ({ value }: any) => `値は${value}に等しい必要です`,
  email: () => '有効なメールアドレスではありませ',
  url: () => '有効なURLではありませ',
  phoneNumber: () => '有効な電話番号ではありませ',
  postalCode: () => '有効な郵便番号ではありませ',
  sizeLimt: () => 'ファイルサイズが上限値を超えました',
  formatLimit: () => 'ファイル形式が無効です',
  date: () => '日付が無効です',
  datetime: () => '時刻が無効です',
  integer: () => '整数ではありません',
  halfWidthNumber: () => '半角数字ではありません',
  halfWidthAlphanumericSymbol: () => '半角英数記号ではありません',
  halfWidth: () => '全半角ではありません',
  fullWidth: () => '全角ではありません',
  fullWidthKana: () => '全角カナではありません',
  password: () => '半角英数字記号をそれぞれ1種類以上含む8文字以上100文字以下',
  currentPassword: () => '現パスワードと新パスワードが同じです',
  newPassword: () => '新パスワードと新パスワード（確認用）が一致しておりません',
  flag: () => 'フラグではありません',
}
export const magiContants= {
  TRANSITIONSOURCEFLAG_0:'0',//遷移元フラグ:0
  TRANSITIONSOURCEFLAG_1:'1',//遷移元フラグ:1
  DESC: 'desc', //降順
  ASC: 'asc',  //昇順
  MESSAGECODE_INSERT_SUCCESS: 'MAACOMMON-001',  //登録しました
  MESSAGECODE_DELETE_SUCCESS: 'MAACOMMON-002',  //削除しました
  MESSAGECODE_UPDATE_SUCCESS: 'MAACOMMON-003',  //更新しました
  MESSAGECODE_RESULT_NULL: 'MAACOMMON-004',  //検索結果が存在しません
  MESSAGECODE_TEMPPW_CREATE_SUCCESS: 'MAACOMMON-005',  //仮パスワード発行しました
  MESSAGECODE_UPDATE_FAILED: 'MAACOMMON-006',  //他のユーザにより変更された可能性がありますので、一覧画面から再度検索してやり直してください
  MESSAGECODE_UPDATEALL_FAILED: 'MAACOMMON-007',  //更新をすべて完了できませんでした。一部のデータが他のユーザにより変更された可能性がありますので、再度検索してやり直してください
  MESSAGECODE_CSV_SUCCESS: 'MAACOMMON-008', //CSV出力しました
  MESSAGECODE_MAAES010_002: 'MAAES010-002',  //選択したお知らせ情報を公開します。よろしいですか？
  MESSAGECODE_MAAES010_003: 'MAAES010-003',  //選択したお知らせ情報を非公開にします。よろしいですか？
  MESSAGECODE_MAAES020_001: 'MAAES020-001',  //ファイル数の上限が超えました。
  MESSAGECODE_MAAES020_002: 'MAAES020-002',  //入力された内容で登録します。よろしいですか？
  MESSAGECODE_MAAES020_003: 'MAAES020-003',  //入力された内容を破棄し、画面を移動します。よろしいですか？
  MESSAGECODE_MAAES020_005: 'MAAES020-005',  //非対応のファイルが含まれています。
  MESSAGECODE_MAAES030_002: 'MAAES030-002',  //入力された内容で更新します。よろしいですか？
  MESSAGECODE_MAAES030_003: 'MAAES030-003',  //ファイル数の上限が超えました。
  MESSAGECODE_MAAES030_004: 'MAAES030-004',  //入力された内容を破棄し、画面を移動します。よろしいですか？
  MESSAGECODE_MAAES030_005: 'MAAES030-005',  //非対応のファイルが含まれています。
  AUTHORITYSYSTEMFLAG_0:'0',//システム管理権限フラグ:0
  AUTHORITYSYSTEMFLAG_1:'1',//システム管理権限フラグ:1
  STATUSVALID:'1',//ステータス:1 有効
  STATUSINVALID:'0',//ステータス:0 無効
  ACCOUNTISSUANCE_STATEMENT:'0',//アカウント発行状況0:未発行
  COMPANYSTAFFNAME_NULL:'-',//企業担当者担当者名null
  ROWSPER_PAGE : 50,//最大件数
  MESSAGECODE_MAACS010_001: 'MAACS010-001',  //仮パスワード発行しました
  MESSAGECODE_MAACS010_002: 'MAACS010-002',  //アカウント発行しました
  AUTHORITYID_10:'10',//権限：システム管理
  AUTHORITYID_20:'20',//権限：アカウント管理
  AUTHORITYID_30:'30',//権限：企業向けアナウンス
  AUTHORITYID_40:'40',//権限：企業管理
  AUTHORITYID_50:'50',//権限：企業サポート
  AUTHORITYID_60:'60',//権限：営業
 }