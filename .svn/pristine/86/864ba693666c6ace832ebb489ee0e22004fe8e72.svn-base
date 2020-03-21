import moment from 'moment'

// 件数バッチのフォーマット済文字列の取得
// バッチ表示用のフォーマット済み文字列を取得する。
export const badgeFormat = (count: number) => {
  return count.toLocaleString()
}

// 空チェック
// 与えられた文字列が空かどうか判定する。
export const isEmpty = (target: string | null) => {
  return target == null || target === '' ? true : false
}

// 現在時刻取得
// 現在の時刻を取得する。
export const now = () => {
  return new Date()
}

// 数値変換(number)
// 与えられた文字列をnumberに変換する。
export const stringToNumber = (target: string | null) => {
  return target && Number(target) ? Number(target) : null
}

// 日付変換(日付形式)
// 与えられた文字列を日付に変換する。
export const stringToDate = (target: string | null) => {
  return target && moment(target, 'YYYY/MM/DD').isValid()
    ? moment(target).toDate()
    : null
}

// 日付変換(日時形式)
// 与えられた文字列を日付に変換する。
export const stringToDateTime = (target: string) => {
  return target && moment(target, 'YYYY/MM/DD HH:mm').isValid()
    ? moment(target).toDate()
    : null
}

// 文字列変換(日付)
// 与えられた日付を文字列に変換する。
export const dateToString = (target: Date | null) => {
  return target && moment(target).isValid()
    ? moment(target).format('YYYY/MM/DD')
    : null
}

// 文字列変換(日時)
// 与えられた日付を文字列に変換する。
export const dateTimeToString = (target: Date | null) => {
  return target && moment(target).isValid()
    ? moment(target).format('YYYY/MM/DD HH:mm')
    : null
}
