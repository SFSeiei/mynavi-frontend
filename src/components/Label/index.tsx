import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { Typography, Grid } from '@material-ui/core'

const useStyles = makeStyles(theme => ({
  label: {
    display: 'block',
    padding: theme.spacing(0.5),
    backgroundColor: theme.palette.primary.main,
    color: 'white',
    borderRadius: theme.spacing(0.5, 0, 0, 0.5),
    textAlign: 'center',
    position: 'relative',
    backgroundClip: 'padding-box',
    '&:after': {
      content: '" "',
      position: 'absolute',
      borderLeft: `16px solid ${theme.palette.primary.main}`,
      borderBottom: '16px solid transparent',
      borderTop: '16px solid transparent',
      height: '0',
      width: '0',
      marginRight: '-16px',
      right: '0',
      top: '0',
    },
  },
  LabelC:{
    display: 'block',
    padding: theme.spacing(0.5),
    backgroundColor: theme.palette.primary.main,
    color: 'white',
    borderRadius: theme.spacing(0.5, 0, 0, 0.5),
    border: 0,
    textAlign: 'center',
    position: 'relative',
    // marginLeft:'60px',
    // marginTop:'20px',
    // backgroundClip: 'padding-box',
    '&:after': {
      content: '" "',
      position: 'absolute',
      borderLeft: '16px solid #00516e',
      borderBottom: '16px solid transparent',
      borderTop: '16px solid transparent',
      height: '0',
      width: '0',
      marginRight: '-16px',
      right: '0',
      top: '0',
    },
  },
  labelUp: {
    display: 'block',
    padding: theme.spacing(0.5),
    backgroundColor: theme.palette.primary.main,
    color: 'white',
    borderRadius: theme.spacing(0.5, 0, 0, 0.5),
    textAlign: 'center',
    position :'relative' ,top:'-120px',
    backgroundClip: 'padding-box',
    '&:after': {
      content: '" "',
      position: 'absolute',
      borderLeft: '16px solid #00516e',
      borderBottom: '16px solid transparent',
      borderTop: '16px solid transparent',
      height: '0',
      width: '0',
      marginRight: '-16px',
      right: '0',
      top: '0',
    },
  },
}))

const Label: React.FC = ({ children }) => {
  const classes = useStyles()

  return (
    <Grid item xs={2}>
      <Typography variant='button' className={classes.label}>
        {children}
      </Typography>
    </Grid>
  )
}

const LabelShort: React.FC = ({ children }) => {
  const classes = useStyles()

  return (
      <Typography variant='button' className={classes.label}>
        {children}
      </Typography>
  )
}

const LabelUp: React.FC = ({ children }) => {
  const classes = useStyles()

  return (
    <Grid item xs={2}>
      <Typography variant='button' className={classes.labelUp}>
        {children}
      </Typography>
    </Grid>
  )
}

const LabelC: React.FC = ({ children }) => {
  const classes = useStyles()

  return (
    <Grid item xs={9}>
      <Typography variant='button' className={classes.LabelC}>
        {children}
      </Typography>
    </Grid>
  )
}

export {Label,LabelShort,LabelUp,LabelC} 
