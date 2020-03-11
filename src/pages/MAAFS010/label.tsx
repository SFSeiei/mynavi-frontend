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
    margin: '0px 0px 0px 17px',
  },

  label: {
    padding: theme.spacing(0.5),
    backgroundColor: theme.palette.primary.main,
    color: 'white',
    borderRadius: theme.spacing(1, 0, 0, 1),
    textAlign: 'center',
  },
 
  label3: {
    padding: theme.spacing(0.5),
    backgroundColor: theme.palette.primary.main,
    color: 'white',
    borderRadius: theme.spacing(1, 0, 0, 1),
    textAlign: 'center',
  }, 
}))

const Label2: React.FC = ({ children }) => {
  const classes = useStyles()

  return (
    <Grid item xs={2} className={classes.root}>
      <Typography className={classes.label}>{children}</Typography>
    </Grid>
  )
}
const Label3: React.FC = ({ children }) => {
  const classes = useStyles()

  return (
    <Grid item xs={2} className={classes.root}>
      <Typography className={classes.label3}>{children}</Typography>
    </Grid>
  )
}

export  {Label2,Label3}