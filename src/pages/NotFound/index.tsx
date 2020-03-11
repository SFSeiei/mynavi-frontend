import React from 'react'
import { Link as RouterLink } from 'react-router-dom'
import { makeStyles } from '@material-ui/core/styles'
import { Typography, Button, useTheme, useMediaQuery } from '@material-ui/core'

import Page from 'components/Page'

const useStyles = makeStyles(theme => ({
  root: {
    padding: theme.spacing(3, 25),
    paddingTop: '10vh',
    display: 'flex',
    flexDirection: 'column',
    alignContent: 'center',
  },
  subtitle: {
    marginTop: theme.spacing(2),
  },
  buttonContainer: {
    marginTop: theme.spacing(6),
    display: 'flex',
    justifyContent: 'center',
  },
}))

const NotFound = () => {
  const classes = useStyles()
  const theme = useTheme()
  const mobileDevice = useMediaQuery(theme.breakpoints.down('sm'))

  return (
    <Page className={classes.root} title='Not Found'>
      <Typography align='center' variant={mobileDevice ? 'h4' : 'h1'}>
        お探しのページが見つかりません。
      </Typography>
      <Typography
        align='center'
        variant='subtitle2'
        className={classes.subtitle}>
        お探しのページは一時的にアクセスできない状態にあるか、移動もしくは削除された可能性があります。また、URL、ファイル名にタイプミスがないか再度ご確認ください。
      </Typography>
      <div className={classes.buttonContainer}>
        <Button
          color='primary'
          component={RouterLink}
          to='/'
          variant='outlined'>
          トップページへ
        </Button>
      </div>
    </Page>
  )
}

export default NotFound
