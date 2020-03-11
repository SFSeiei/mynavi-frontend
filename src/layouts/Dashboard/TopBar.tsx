import React from 'react'
import { Link as RouterLink } from 'react-router-dom'
import clsx from 'clsx'
import { makeStyles } from '@material-ui/core/styles'
import {
  AppBar,
  Button,
  Toolbar,
  Hidden,
  Typography,
  IconButton,
} from '@material-ui/core'
import InputIcon from '@material-ui/icons/Input'
import { useDispatch } from 'react-redux'
import { signout } from 'reducers/globalMenuReducer'
import MenuIcon from '@material-ui/icons/Menu'

const useStyles = makeStyles(theme => ({
  root: {
    boxShadow: 'none',
  },
  flexGrow: {
    flexGrow: 1,
  },
  logoutButton: {
    marginLeft: theme.spacing(1),
  },
  logoutIcon: {
    marginRight: theme.spacing(1),
  },
  title: {
    color: '#fff',
    lineHeight: '32px',
  },
  link: {
    textDecoration: 'none',
  },
}))

interface Props {
  className: string
  onOpenNavBarMobile: () => void
}

const TopBar = ({ className, onOpenNavBarMobile }: Props) => {
  const classes = useStyles()

  const dispatch = useDispatch()
  const handleSignout = () => dispatch(signout())

  return (
    <AppBar className={clsx(classes.root, className)} color='primary'>
      <Toolbar>
        <RouterLink to='/' className={classes.link}>
          <Typography
            variant='h4'
            noWrap
            className={classes.title}>
            {process.env.REACT_APP_WEBSITE_NAME}
          </Typography>
        </RouterLink>
        <div className={classes.flexGrow} />
        <Hidden mdDown>
          <Button
            className={classes.logoutButton}
            color='inherit'
            onClick={handleSignout}>
            <InputIcon className={classes.logoutIcon} />
            ログアウト
          </Button>
        </Hidden>
        <Hidden lgUp>
          <IconButton color='inherit' onClick={onOpenNavBarMobile}>
            <MenuIcon />
          </IconButton>
        </Hidden>
      </Toolbar>
    </AppBar>
  )
}

export default TopBar
