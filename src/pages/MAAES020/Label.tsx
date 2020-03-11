import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { Typography, Grid } from '@material-ui/core'

const useStyles = makeStyles(theme => ({
  root: {
    position: 'relative',
    '&:after': {
      content: '" "',
      position: 'absolute',
      borderLeft: '14px solid #00516e',
      borderBottom: '14px solid transparent',
      borderTop: '14px solid transparent',
      height: '0',
      width: '0',
      marginRight: '-14px',
      right: '0',
      top: '0',
    },
  },
  label: {
    padding: theme.spacing(0.5),
    backgroundColor: theme.palette.primary.main,
    color: 'white',
    borderRadius: theme.spacing(1, 0, 0, 1),
    textAlign: 'center',
  },
}))

const DateLabel = (props: any) => {
  const classes = useStyles()

  return (
    <Grid item xs={6} className={classes.root}>
      <Typography className={classes.label}>{props.children}</Typography>
    </Grid>
  )
}

export default DateLabel
