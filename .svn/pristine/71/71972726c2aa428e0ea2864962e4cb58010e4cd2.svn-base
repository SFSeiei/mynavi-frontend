import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { Typography } from '@material-ui/core'

const useStyles = makeStyles(theme => ({
  root: {
    padding: theme.spacing(2, 4),
    textAlign: 'right',
    flexShrink: 0,
  },
}))

const Footer = () => {
  const classes = useStyles()

  return (
    <div className={classes.root}>
      <Typography variant='caption'>
        Copyright &copy; Mynavi Corporation {new Date().getFullYear()}
      </Typography>
    </div>
  )
}

export default Footer
