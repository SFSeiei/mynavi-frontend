import React from 'react'
import { Link as RouterLink } from 'react-router-dom'
import { makeStyles } from '@material-ui/core/styles'
import { AppBar, Toolbar, Typography } from '@material-ui/core'

const useStyles = makeStyles({
  root: {
    boxShadow: 'none',
  },
  link: {
    textDecoration: 'none',
  },
  title: {
    color: '#fff',
    lineHeight: '32px',
  },
})

const TopBar = () => {
  const classes = useStyles()

  return (
    <AppBar className={classes.root} color='primary'>
      <Toolbar>
        <RouterLink to='/' className={classes.link}>
          <Typography
            variant='h4'
            noWrap
            className={classes.title}>
            {process.env.REACT_APP_WEBSITE_NAME}
          </Typography>
        </RouterLink>
      </Toolbar>
    </AppBar>
  )
}

export default TopBar
