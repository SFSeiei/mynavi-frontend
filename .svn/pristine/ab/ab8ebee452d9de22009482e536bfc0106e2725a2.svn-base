import React, { useState, forwardRef } from 'react'
import { NavLink as RouterLink } from 'react-router-dom'
import clsx from 'clsx'
import { makeStyles } from '@material-ui/core/styles'
import { ListItem, Button, Collapse, colors } from '@material-ui/core'
import AddIcon from '@material-ui/icons/Add'
import { useDispatch } from 'react-redux'
import { companyInitialize, initializeCompany } from 'reducers/companyReducer'
import RemoveIcon from '@material-ui/icons/Remove'
import { applicationInitialize, initialApplication } from 'reducers/applicationReducer'
import { accountInitialize, initializeAccount } from 'reducers/accountReducer'
import { initForNotiList, notificationInitialize } from 'reducers/notificationReducer'
import { routeList } from 'routes/routes'
import history from 'utils/history'

const useStyles = makeStyles(theme => ({
  item: {
    display: 'block',
    paddingTop: 0,
    paddingBottom: 0,
  },
  itemLeaf: {
    display: 'flex',
    paddingTop: 0,
    paddingBottom: 0,
  },
  button: {
    color: colors.blueGrey[800],
    padding: '10px 8px',
    justifyContent: 'flex-start',
    textTransform: 'none',
    letterSpacing: 0,
    width: '100%',
  },
  buttonLeaf: {
    color: colors.blueGrey[800],
    padding: '10px 8px',
    justifyContent: 'flex-start',
    textTransform: 'none',
    letterSpacing: 0,
    width: '100%',
    fontWeight: theme.typography.fontWeightRegular,
    '&.depth-0': {
      fontWeight: theme.typography.fontWeightMedium,
    },
  },
  icon: {
    color: (theme.palette as any)['icon'],
    display: 'flex',
    alignItems: 'center',
    marginRight: theme.spacing(1),
  },
  expandIcon: {
    marginLeft: 'auto',
    height: 16,
    width: 16,
  },
  label: {
    display: 'flex',
    alignItems: 'center',
    marginLeft: 'auto',
  },
  active: {
    color: theme.palette.primary.main,
    fontWeight: theme.typography.fontWeightMedium,
    '& $icon': {
      color: theme.palette.primary.main,
    },
  },
}))

const NavigationListItem = ({
  title,
  href,
  depth,
  children,
  icon: Icon,
  className,
  open: openProp,
  label: Label,
  ...rest
}: any) => {
  const classes = useStyles()
  const [open, setOpen] = useState(openProp)
  const dispatch = useDispatch();
  const handleToggle = () => {
    setOpen(!open)
  }
  const handleInitialize = () => {
    dispatch(applicationInitialize(title))
    dispatch(accountInitialize(title))
    dispatch(companyInitialize(title))
    dispatch(notificationInitialize(title))
    if (title === 'アカウント一覧' ) {
      dispatch(initializeAccount())
    }
    if (title === '企業情報一覧' ) {
      dispatch(initializeCompany())
    }
    if (title === '申込情報一覧' ) {
      dispatch(initialApplication())
    }
    if (title === 'お知らせ情報一覧' ) {
      dispatch(initForNotiList())
    }
    if (title === 'パスワード変更' ) {
      history.push(routeList.accountUpdatePassword)
    }
  }; 
  let paddingLeft = 8

  if (depth > 0) {
    paddingLeft = 32 + 8 * depth
  }

  const style = {
    paddingLeft,
  }

  if (children) {
    return (
      <ListItem
        {...rest}
        className={clsx(classes.item, className)}
        disableGutters>
        <Button className={classes.button} onClick={handleToggle} style={style}>
          {Icon && <Icon className={classes.icon} />}
          {title}
          {open ? (
            <RemoveIcon className={classes.expandIcon} color='inherit' />
          ) : (
            <AddIcon className={classes.expandIcon} color='inherit' />
          )}
        </Button>
        <Collapse in={open}>{children}</Collapse>
      </ListItem>
    )
  } else {
    return (
      <ListItem
        {...rest}
        className={clsx(classes.itemLeaf, className)}
        disableGutters>
        <Button
          onClick={handleInitialize}
          className={clsx(classes.buttonLeaf, `depth-${depth}`)}
          style={style}>
          {Icon && <Icon className={classes.icon} />}
          {title}
          {Label && (
            <span className={classes.label}>
              <Label />
            </span>
          )}
        </Button>
      </ListItem>
    )
  }
}

export default NavigationListItem
