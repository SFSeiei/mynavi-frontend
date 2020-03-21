import { AuthorityMaster} from 'reducers/accountReducer'
import { routeList } from 'routes/routes'
import history from './history'

export type Order = 'asc' | 'desc'

function desc<T>(a: T, b: T, orderBy: keyof T) {
  if (b[orderBy] < a[orderBy]) {
    return -1
  }
  if (b[orderBy] > a[orderBy]) {
    return 1
  }
  return 0
}

export function getSorting<K extends keyof any>(
  order: Order,
  orderBy: K
): (
  a: { [key in K]: number | string | string[] },
  b: { [key in K]: number | string | string[] }
) => number {
  return order === 'desc'
    ? (a, b) => desc(a, b, orderBy)
    : (a, b) => -desc(a, b, orderBy)
}

export function stableSort<T>(array: T[], cmp: (a: T, b: T) => number) {
  const stabilizedThis = array.map((el, index) => [el, index] as [T, number])
  stabilizedThis.sort((a, b) => {
    const order = cmp(a[0], b[0])
    if (order !== 0) return order
    return a[1] - b[1]
  })
  return stabilizedThis.map(el => el[0])
}

export const permissionMap: { [key: string]: number } = {
  システム管理: 1,
  アカウント管理: 2,
  企業管理: 3,
  企業サポート: 4,
  営業: 5,
}

export const convertPermissions = (
  administratorId: string,
  permissions: string[]
) =>
  permissions.map(i => ({
    administratorId,
    permissionId: permissionMap[i],
  }))

export const capitalize = (str: string) => str[0].toUpperCase() + str.slice(1)


export const replaceToOrigin = () => {
  let baseUrl
  if (window.location.origin === undefined){

     baseUrl = window.location.protocol + '//' + window.location.host;
  }else{
     baseUrl = window.location.origin;
  }
  window.location.replace(baseUrl)
}

export const bytesToSize = (bytes: number, decimals = 2) => {
  if (bytes === 0) return '0 Bytes'

  const k = 1024
  const dm = decimals < 0 ? 0 : decimals
  const sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB']

  const i = Math.floor(Math.log(bytes) / Math.log(k))

  return parseFloat((bytes / Math.pow(k, i)).toFixed(dm)) + ' ' + sizes[i]
}

export const convertToAccountDto = (data: any) => ({
  ...data,
  permissions: data.permissions.map((i: any) => {
    let authorityId: string
    switch (i) {
      case 'system':
        authorityId = '10'
        break
      case 'accout':
        authorityId = '20'
        break
      case 'announceForCompany':
        authorityId = '30'
        break
      case 'company':
        authorityId = '40'
        break
      case 'support':
        authorityId = '50'
        break
      case 'sales':
        authorityId = '60'
        break
      default:
        authorityId = '10'
    }
    return { authorityId, authorityName: i, displayOrder: null, validFlag: null } as AuthorityMaster;
  }),
})

export const backToAccountPage = () => history.push(routeList.account)
export const convertDateString = (input: string) =>
  isNaN(Date.parse(input))
    ? ''
    : new Intl.DateTimeFormat('ja-JP').format(new Date(input))

/**
 * Input String Format: YYYY/MM/DD
 */
export const convertStringToDateArgs = (input: string) => {
  const [year, month, day] = input
    .split('/')
    .map(i => parseInt(i))
    .map((item, index) => (index === 1 ? item - 1 : item)) // Month is zero-indexed

  return [year, month, day] as const
}

export const convertStringForIe = (input: string) => input.split('/').join('-')
