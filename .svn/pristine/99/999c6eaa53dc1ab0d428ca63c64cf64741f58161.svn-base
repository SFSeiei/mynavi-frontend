import { lazy } from 'react'

import { DashboardLayout, AuthLayout } from 'layouts'
import { routeList, routePermissionList } from './routes'
import { RouteConfig } from 'react-router-config'

export const publicRouteList = [
  {
    component: AuthLayout,
    routes: [
      {
        path: routeList.updatePassword,
        component: lazy(() => import('pages/MAABS010')),
        exact: true,
      },
      {
        path: routeList.home,
        component: lazy(() => import('pages/MAAAS010')),
      }
    ],
  },
]

export const allPrivateRouteList: RouteConfig[] = [
  {
    path: routeList.home,
    component: lazy(() => import('pages/Home')),
    exact: true,
  },
  {
    path: routeList.unauthorized,
    component: lazy(() => import('pages/Unauthorized')),
    exact: true,
  },
  {
    path: routeList.account,
    component: lazy(() => import('pages/MAABS020')),
    exact: true,
  },
  {
    path: routeList.accountCreate,
    component: lazy(() => import('pages/MAABS030')),
    exact: true,
  },
  {
    path: routeList.accountUpdatePassword,
    component: lazy(() => import('pages/MAABS010')),
    exact: true,
  },
  {
    path: routeList.accountEdit,
    component: lazy(() => import('pages/MAABS040')),
  },
  {
    path: routeList.company,
    component: lazy(() => import('pages/MAACS010')),
    exact: true,
  },
  {
    path: routeList.companyAccount,
    component: lazy(() => import('pages/MAACS040')),
    exact: true,
  },
  {
    path: routeList.companyCreate,
    component: lazy(() => import('pages/MAACS020')),
    exact: true,
  },
  {
    path: routeList.companyDetail,
    component: lazy(() => import('pages/MAACS030')),
    exact: true,
  },
  {
    path: routeList.companyAccount,
    component: lazy(() => import('pages/MAACS040')),
    exact: true,
  },
  {
    path: routeList.application,
    component: lazy(() => import('pages/MAADS010')),
    exact: true,
  },
  {
    path: routeList.applicationDetail,
    component: lazy(() => import('pages/MAADS020')),
    exact: true,
  },
  {
    path: routeList.notification,
    component: lazy(() => import('pages/MAAES010')),
    exact: true,
  },
  {
    path: routeList.notificationCreate,
    component: lazy(() => import('pages/MAAES020')),
    exact: true,
  },
  {
    path: routeList.notificationDetail,
    component: lazy(() => import('pages/MAAES030')),
    exact: true,
  },
  {
    path: routeList.operationLog,
    component: lazy(() => import('pages/MAAFS010')),
    exact: true,
  },
  {
    path: routeList.login,
    component: lazy(() => import('pages/RedirectToHome')),
  },
  {
    path: routeList.errorBoundary,
    component: lazy(() => import('pages/ErrorBoundary')),
    exact: true,
  },
  {
    component: lazy(() => import('pages/NotFound')),
  },
]

const navigationGuard = (permissions: string[], list = allPrivateRouteList) =>
  list.map(i => {
    if (i.path) {
      if (
        !permissions.some(x =>
          routePermissionList[i.path as string].includes(x)
        )
      ) {
        // return { ...i, component: lazy(() => import('pages/Unauthorized')) }
      }
    }
    return i
  })

export const privateRouteList = (permissions: string[]) => [
  {
    component: DashboardLayout,
    routes: navigationGuard(permissions),
  },
]
