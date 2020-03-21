import ListAltIcon from '@material-ui/icons/ListAlt'
import PeopleIcon from '@material-ui/icons/PeopleOutlined'
import MailOutlineIcon from '@material-ui/icons/MailOutline'
import BusinessIcon from '@material-ui/icons/Business'
import { routeList, routePermissionList } from 'routes/routes'

export default (permissions: string[]) => [
  {
    title: '',
    pages: [
      {
        title: 'アカウント管理',
        href: routeList.accountUpdatePassword,
        icon: PeopleIcon,
        children: [
          {
            title: 'アカウント一覧',
            href: routeList.account,
          },
          {
            title: 'パスワード変更',
            href: routeList.accountUpdatePassword,
          },
        ].reduce((accumulator, current) =>
          permissions.some(i => routePermissionList[current.href].includes(i))
            ? [...accumulator, current]
            : accumulator,
          [] as any),
      },
      {
        title: '企業情報管理',
        href: routeList.company,
        icon: BusinessIcon,
        children: [
          {
            title: '企業情報一覧',
            href: routeList.company,
          },
        ],
      },
      {
        title: '申込情報管理',
        href: routeList.application,
        icon: ListAltIcon,
        children: [
          {
            title: '申込情報一覧',
            href: routeList.application,
          }
        ],
      },
      {
        title: 'お知らせ情報管理',
        href: routeList.notification,
        icon: MailOutlineIcon,
        children: [
          {
            title: 'お知らせ情報一覧',
            href: routeList.notification,
          },
        ]
      },
    ].reduce(
      (accumulator, current) =>
        permissions.some(i => routePermissionList[current.href].includes(i))
          ? [...accumulator, current]
          : accumulator,
      [] as any
    ),
  },
]
