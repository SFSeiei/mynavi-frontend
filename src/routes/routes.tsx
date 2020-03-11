import { magiContants } from 'utils/contants';
export const routeList = {
  home: '/',
  login: '/login',
  account: '/accountManagement/accountList',
  accountCreate: '/accountManagement/accountList/create',
  accountEdit: '/accountManagement/accountList/detail',
  accountUpdatePassword: '/accountManagement/changePassword',
  updatePassword: '/changePassword',
  company: '/corporateInformationManagement/corporateList',
  companyAccount: '/company/companyAccount',
  companyCreate: '/company/companyCreate',
  companyDetail: '/company/detail/:id',
  application: '/applicationInformationManagement/applicationList',
  notification: '/newsManagement/newsList',
  notificationCreate: '/newsManagement/newsCreate',
  notificationDetail: '/newsManagement/newsDetail',
  applicationDetail: '/application/detail',
  operationLog: '/operationLog/init',
  errorBoundary: '/',
  unauthorized: '/Unauthorized'
}

export const routePermissionList: { [key: string]: string[] } = {
  [routeList.home]: [
    magiContants.AUTHORITYID_10,
    magiContants.AUTHORITYID_20,
    magiContants.AUTHORITYID_30,
    magiContants.AUTHORITYID_40,
    magiContants.AUTHORITYID_50,
    magiContants.AUTHORITYID_60,
  ],
  [routeList.unauthorized]: [
    magiContants.AUTHORITYID_10,
    magiContants.AUTHORITYID_20,
    magiContants.AUTHORITYID_30,
    magiContants.AUTHORITYID_40,
    magiContants.AUTHORITYID_50,
    magiContants.AUTHORITYID_60,
  ],
  [routeList.login]: [
    magiContants.AUTHORITYID_10,
    magiContants.AUTHORITYID_20,
    magiContants.AUTHORITYID_30,
    magiContants.AUTHORITYID_40,
    magiContants.AUTHORITYID_50,
    magiContants.AUTHORITYID_60,
  ],
  [routeList.account]: [magiContants.AUTHORITYID_10, magiContants.AUTHORITYID_20],
  [routeList.accountCreate]: [magiContants.AUTHORITYID_10, magiContants.AUTHORITYID_20],
  [routeList.accountEdit]: [magiContants.AUTHORITYID_10, magiContants.AUTHORITYID_20],
  [routeList.accountUpdatePassword]: [
    magiContants.AUTHORITYID_10,
    magiContants.AUTHORITYID_20,
    magiContants.AUTHORITYID_30,
    magiContants.AUTHORITYID_40,
    magiContants.AUTHORITYID_50,
    magiContants.AUTHORITYID_60,
  ],
  [routeList.updatePassword]: [
    magiContants.AUTHORITYID_10,
    magiContants.AUTHORITYID_20,
    magiContants.AUTHORITYID_30,
    magiContants.AUTHORITYID_40,
    magiContants.AUTHORITYID_50,
    magiContants.AUTHORITYID_60,
  ],
  [routeList.company]: [magiContants.AUTHORITYID_10, magiContants.AUTHORITYID_40, magiContants.AUTHORITYID_50, magiContants.AUTHORITYID_60],
  [routeList.companyAccount]: [magiContants.AUTHORITYID_10, magiContants.AUTHORITYID_40, magiContants.AUTHORITYID_50, magiContants.AUTHORITYID_60],
  [routeList.companyCreate]: [magiContants.AUTHORITYID_10, magiContants.AUTHORITYID_40, magiContants.AUTHORITYID_50, magiContants.AUTHORITYID_60],
  [routeList.companyDetail]: [magiContants.AUTHORITYID_10, magiContants.AUTHORITYID_40, magiContants.AUTHORITYID_50, magiContants.AUTHORITYID_60],
  [routeList.application]: [magiContants.AUTHORITYID_10, magiContants.AUTHORITYID_40, magiContants.AUTHORITYID_50, magiContants.AUTHORITYID_60],
  [routeList.notification]: [magiContants.AUTHORITYID_10,magiContants.AUTHORITYID_30],
  [routeList.notificationCreate]: [magiContants.AUTHORITYID_10,magiContants.AUTHORITYID_30],
  [routeList.notificationDetail]: [magiContants.AUTHORITYID_10,magiContants.AUTHORITYID_30],  
  [routeList.applicationDetail]: [magiContants.AUTHORITYID_10, magiContants.AUTHORITYID_40, magiContants.AUTHORITYID_50, magiContants.AUTHORITYID_60],
  [routeList.operationLog]: [magiContants.AUTHORITYID_10, magiContants.AUTHORITYID_40, magiContants.AUTHORITYID_50],
}
