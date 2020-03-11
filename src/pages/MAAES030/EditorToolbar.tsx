import React from 'react'
import { Tooltip, Button } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import FormatBoldIcon from '@material-ui/icons/FormatBold'
import FormatQuoteIcon from '@material-ui/icons/FormatQuote'
import FormatListBulletedIcon from '@material-ui/icons/FormatListBulleted'
import LinkIcon from '@material-ui/icons/Link'

const useStyles = makeStyles(theme => ({
  container: {
    padding: theme.spacing(1),
    display: 'flex',
    alignItems: 'center',
  },
  button: {
    padding: 0,
    width: 32,
    height: 32,
    minWidth: 32,
    color: (theme.palette as any).icon,
    '& + &': {
      marginLeft: theme.spacing(1),
    },
  },
}))

const INLINE_STYLES = [
  {
    command: 'bold',
    tooltip: 'Bold',
    icon: FormatBoldIcon,
  },
  {
    command: 'link',
    tooltip: 'Link',
    icon: LinkIcon,
  },
  {
    command: 'ul',
    tooltip: 'List',
    icon: FormatListBulletedIcon,
  },
  {
    command: 'quote',
    tooltip: 'Quote',
    icon: FormatQuoteIcon,
  },
]

const EditorToolbar = ({ onClick, onLink }: any) => {
  const classes = useStyles()

  return (
    <div className={classes.container}>
      {INLINE_STYLES.map(i => (
        <Tooltip title={i.tooltip}>
          <Button
            className={classes.button}
            onClick={i.command === 'link' ? onLink : onClick(i.command)}>
            <i.icon />
          </Button>
        </Tooltip>
      ))}
    </div>
  )
}

export default EditorToolbar
