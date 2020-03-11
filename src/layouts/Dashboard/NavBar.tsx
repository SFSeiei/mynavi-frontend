import React, { useEffect } from 'react'
import clsx from 'clsx'
import { makeStyles } from '@material-ui/core/styles'
import { Hidden, Drawer, Divider, Paper, Typography } from '@material-ui/core'
import { magiContants } from 'utils/contants';
import { useRouter } from 'providers/routerProvider'
import Navigation from 'components/Navigation'
import navigationConfig from './navigationConfig'

const useStyles = makeStyles(theme => ({
  root: {
    height: '100%',
    overflowY: 'auto',
  },
  content: {
    padding: theme.spacing(2),
  },
  profile: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    minHeight: 'fit-content',
  },
  avatar: {
    width: 60,
    height: 60,
    margin: 10,
    backgroundColor: theme.palette.primary.main,
  },
  userName: {
    marginTop: theme.spacing(1),
  },
  divider: {
    marginTop: theme.spacing(2),
  },
  navigation: {
    marginTop: theme.spacing(2),
  },
}))

interface UserInfo {
  userName: string
  permissions: string[]
}

interface Props {
  className: string
  openMobile: boolean
  userInfo: UserInfo
  onMobileClose: () => void
}

const NavBar = ({ userInfo, className, openMobile, onMobileClose }: Props) => {
  const classes = useStyles()
  const router = useRouter()
  const { userName, permissions } = userInfo

  useEffect(() => {
    if (openMobile) {
      onMobileClose()
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [router.location.pathname])

  const navbarContent = (
    <div className={classes.content}>
      <div className={classes.profile}>
        <Typography className={classes.userName} variant='h4'>
          {userName}
        </Typography>
        {permissions.map((item, index) => (
          <Typography variant='body2' key={index}>
            {item === magiContants.AUTHORITYID_10
             ? 'システム管理'
             : item === magiContants.AUTHORITYID_20 
             ? 'アカウント管理' 
             : item === magiContants.AUTHORITYID_30 
             ? '企業向けアナウンス'
             : item === magiContants.AUTHORITYID_40 
             ? '企業管理' 
             : item === magiContants.AUTHORITYID_50 
             ? '企業サポート' 
             : '営業'}
          </Typography>
        ))}
      </div>
      <Divider className={classes.divider} />
      <nav className={classes.navigation}>
        {navigationConfig(permissions).map(list => (
          <Navigation key={list.title} pages={list.pages} title={list.title} />
        ))}
      </nav>
    </div>
  )

  return (
    <>
      <Hidden lgUp>
        <Drawer
          anchor='left'
          onClose={onMobileClose}
          open={openMobile}
          variant='temporary'>
          <div className={clsx(classes.root, className)}>{navbarContent}</div>
        </Drawer>
      </Hidden>
      <Hidden mdDown>
        <Paper className={clsx(classes.root, className)} elevation={1} square>
          {navbarContent}
        </Paper>
      </Hidden>
    </>
  )
}

export default NavBar
