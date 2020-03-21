import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { CircularProgress } from '@material-ui/core'

const useStyles = makeStyles({
  overlay: {
    position: 'fixed',
    display: 'block',
    width: '100%',
    height: '100%',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(0,0,0,0.5)',
    zIndex: 1200,
    cursor: 'pointer',
    transition: '0.5s',
  },
  indicator: {
    position: 'absolute',
    top: '50%',
    left: '50%',
    color: 'white',
  },
})

interface Props {
  className?: string
}

const Loading = ({ className }: Props) => {
  const classes = useStyles()

  return (
    <div className={`${classes.overlay} ${className}`}>
      <CircularProgress className={classes.indicator} />
    </div>
  )
}

export default Loading
