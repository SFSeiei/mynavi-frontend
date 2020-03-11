import React, { useState } from 'react'
import { Link as RouterLink } from 'react-router-dom'
import PerfectScrollbar from 'react-perfect-scrollbar'
import { makeStyles } from '@material-ui/core/styles'
import {
  Card,
  CardActions,
  CardContent,
  Checkbox,
  Link,
  Table,
  TableBody,
  TableCell,
  TableRow,
  MenuItem,
  Select,
  InputLabel,
  FormControl,
  Button,
  Typography,
  Dialog,
  DialogTitle,
  DialogActions,
  Hidden,
  colors,
} from '@material-ui/core'

import { stableSort, getSorting, Order } from 'utils/misc'
import EnhancedTableHead, { headCells } from './EnhancedTableHead'
import {
  Notification,
  updateByPublic,
  updateByNoPublic,
} from 'reducers/notificationReducer'
import { useDispatch } from 'react-redux'
import { Paginate } from 'components'
import { routeList } from 'routes/routes'
import { MAAES010IdRequest } from 'types/MAAES010IdRequest'
import { messageMap } from './formConfig'
import { magiContants } from 'utils/contants'

const useStyles = makeStyles(theme => ({
  content: {
    padding: 0,
    '&:last-child': {
      paddingBottom: 0,
    },
  },
  inner: {
    minWidth: 700,
  },
  linkCell: {
    color: '#1a0dab',
  },
  nameCell: {
    display: 'flex',
    alignItems: 'center',
  },
  avatar: {
    height: 42,
    width: 42,
    marginRight: theme.spacing(1),
  },
  actions: {
    padding: theme.spacing(1.5, 0),
    justifyContent: 'space-between',
  },
  count: {
    padding: theme.spacing(0, 1.5),
  },
  singleAction: {
    padding: theme.spacing(1.5, 0),
    justifyContent: 'flex-end',
  },
  formControl: {
    minWidth: 180,
    margin: theme.spacing(0, 2, 0, 4),
  },
  selectGroup: {
    display: 'flex',
    alignItems: 'center',
    margin: theme.spacing(1.5, 0),
  },
  label: {
    padding: theme.spacing(0.5, 2),
    backgroundColor: theme.palette.primary.main,
    color: 'white',
    borderRadius: theme.spacing(0.5, 0, 0, 0.5),
    textAlign: 'center',
    position: 'relative',
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
  invalidGrey: {
    backgroundColor: colors.grey[500],
    height: 100,
  },
  none: { height: 100 },
  categoryGreen: {
    alignItems: 'center',
    borderRadius: '12px',
    backgroundColor: '#cef0ac',
    display:'inline-flex',
    fiexBasis: '150px',
    justifyContent: 'center',
    margin: '8px',
    width: '150px',
    fontColor: 'inherit',
    fontFamily: 'inherit',
    fontSize:'inherit',
    fontStyle:'inherit',
    fontVariant:'inherit',
    fontWeight:'inherit',
    lineHeight:'inherit',
  },
  categoryBlue: {
    alignItems: 'center',
    borderRadius: '12px',
    backgroundColor: '#b6d3f0',
    display:'inline-flex',
    fiexBasis: '150px',
    justifyContent: 'center',
    margin: '8px',
    width: '150px',
    fontColor: 'inherit',
    fontFamily: 'inherit',
    fontSize:'inherit',
    fontStyle:'inherit',
    fontVariant:'inherit',
    fontWeight:'inherit',
    lineHeight:'inherit',
  },
  categoryRed: {
    alignItems: 'center',
    borderRadius: '12px',
    backgroundColor: '#f5c4dc',
    display:'inline-flex',
    fiexBasis: '150px',
    justifyContent: 'center',
    margin: '8px',
    width: '150px',
    fontColor: 'inherit',
    fontFamily: 'inherit',
    fontSize:'inherit',
    fontStyle:'inherit',
    fontVariant:'inherit',
    fontWeight:'inherit',
    lineHeight:'inherit',
  },
  categoryYellow: {
    alignItems: 'center',
    borderRadius: '12px',
    backgroundColor: '#dbc4f5',
    display:'inline-flex',
    fiexBasis: '150px',
    justifyContent: 'center',
    margin: '8px',
    width: '150px',
    fontColor: 'inherit',
    fontFamily: 'inherit',
    fontSize:'inherit',
    fontStyle:'inherit',
    fontVariant:'inherit',
    fontWeight:'inherit',
    lineHeight:'inherit',
  },
}))

interface Props {
  notifications: Notification[]
  className: string
}

const Results = ({ notifications, className }: Props) => {
  const classes = useStyles()
  const dispatch = useDispatch()

  const [open, setOpen] = useState(false)
  const [selectedNotifications, setSelectedNotifications] = useState(
    [] as number[]
  )
  const [page, setPage] = useState(0)
  const [order, setOrder] = useState<Order>('asc')
  const [orderBy, setOrderBy] = useState('name')
  const startIndex = page * magiContants.ROWSPER_PAGE
  const endIndex =
    startIndex + magiContants.ROWSPER_PAGE > notifications.length
      ? notifications.length
      : startIndex + magiContants.ROWSPER_PAGE

  const handleClose = () => {
    setOpen(false)
  }

  /**
   * Select Field
   */
  const [option, setOption] = useState('')
  const inputLabel = React.useRef<HTMLLabelElement>(null)
  const [labelWidth, setLabelWidth] = React.useState(0)
  React.useEffect(() => {
    setLabelWidth(inputLabel.current!.offsetWidth)
  }, [])

  const handleOption = (e: any) => {
    setOption(e.target.value)
  }

  const handleOperation = () => {
    setOpen(false)
    const notiUpdateList: MAAES010IdRequest[] = []
    selectedNotifications.forEach(i => {
      const noti = notifications.find(x => x.listNewsId === i)
      if (noti) {
        notiUpdateList.push({
          listNewsId: noti.listNewsId,
          listSysVersionNumber: noti.listSysVersionNumber,
        })
      }
    })
    if (option === 'public') {
      dispatch(
        updateByPublic({
          data: notiUpdateList,
          message: '選択されたアカウントを公開にしました',
        })
      )
    }
    if (option === 'noPublic') {
      dispatch(
        updateByNoPublic({
          data: notiUpdateList,
          message: '選択されたアカウントを非公開にしました',
        })
      )
    }
    setSelectedNotifications([])
  }

  const handleSelectAll = () => {
    setSelectedNotifications(() =>
      selectedNotifications.length < Math.ceil(endIndex - startIndex)
        ? notifications.slice(startIndex, endIndex).map(i => i.listNewsId)
        : []
    )
  }

  const handleSelectOne = (_event: any, newsId: number) => {
    const selectedIndex = selectedNotifications.indexOf(newsId)
    let newSelectedCustomers: number[] = []

    if (selectedIndex === -1) {
      newSelectedCustomers = newSelectedCustomers.concat(
        selectedNotifications,
        newsId
      )
    } else if (selectedIndex === 0) {
      newSelectedCustomers = newSelectedCustomers.concat(
        selectedNotifications.slice(1)
      )
    } else if (selectedIndex === selectedNotifications.length - 1) {
      newSelectedCustomers = newSelectedCustomers.concat(
        selectedNotifications.slice(0, -1)
      )
    } else if (selectedIndex > 0) {
      newSelectedCustomers = newSelectedCustomers.concat(
        selectedNotifications.slice(0, selectedIndex),
        selectedNotifications.slice(selectedIndex + 1)
      )
    }

    setSelectedNotifications(newSelectedCustomers)
  }

  const handleRequestSort = (_event: any, property: string) => {
    const isDesc = orderBy === property && order === magiContants.DESC
    setOrder(isDesc ? 'asc': 'desc')
    setOrderBy(property)
  }

  const handleChangePage = (data: any) => {
    setSelectedNotifications([])
    setPage(data.selected)
  }

  return (
    <div className={className}>
      <div className={classes.selectGroup}>
        <Typography variant='button' className={classes.label}>
          一括操作{' '}
        </Typography>
        <FormControl
          variant='outlined'
          className={classes.formControl}
          margin='dense'>
          <InputLabel ref={inputLabel}>以下から選択</InputLabel>
          <Select
            value={option}
            onChange={handleOption}
            labelWidth={labelWidth}>
            <MenuItem value='public'>公開にする</MenuItem>
            <MenuItem value='noPublic'>非公開にする</MenuItem>
          </Select>
        </FormControl>
        <Button
          disabled={!option || selectedNotifications.length === 0}
          variant='contained'
          color='primary'
          onClick={() => setOpen(true)}>
          実行する
        </Button>
      </div>
      <Card className={className}>
        <CardActions className={classes.actions}>
          <Typography className={classes.count}>{`${
            notifications.length
          } 件中 ${startIndex + 1}-${endIndex} 件表示`}</Typography>
          <Paginate
            pageCount={Math.ceil(notifications.length / magiContants.ROWSPER_PAGE)}
            forcePage={page}
            onPageChange={handleChangePage}
          />
        </CardActions>
        <CardContent className={classes.content}>
          <PerfectScrollbar style={{ position: 'relative', height: 600 }}>
            <div className={classes.inner}>
              <Table style={{ tableLayout: 'fixed' }} stickyHeader>
                <EnhancedTableHead
                  numSelected={selectedNotifications.length}
                  order={order}
                  orderBy={orderBy}
                  onSelectAllClick={handleSelectAll}
                  onRequestSort={handleRequestSort}
                  rowCount={Math.ceil(endIndex - startIndex)}
                />
                <TableBody>
                  {stableSort(
                    notifications.map(i => ({
                      ...i,
                    })),
                    getSorting(order, orderBy)
                  )
                    .slice(page * magiContants.ROWSPER_PAGE, page * magiContants.ROWSPER_PAGE + magiContants.ROWSPER_PAGE)
                    .map(i => (
                      <TableRow
                        className={
                          i.greyOutFlag === '1'
                            ? classes.invalidGrey
                            : classes.none
                        }
                        key={i.listNewsId}
                        selected={
                          selectedNotifications.indexOf(i.listNewsId) !== -1
                        }>
                        <TableCell padding='checkbox' align='center'>
                          <Checkbox
                            checked={
                              selectedNotifications.indexOf(i.listNewsId) !== -1
                            }
                            color='primary'
                            onChange={event =>
                              handleSelectOne(event, i.listNewsId)
                            }
                            value={
                              selectedNotifications.indexOf(i.listNewsId) !== -1
                            }
                          />
                        </TableCell>
                        {headCells.map(c =>
                          c.id === 'listSubject' ? (
                            <TableCell key={c.id} align='center'>
                              <Link
                                to={{
                                  pathname: routeList.notificationDetail,
                                  state: { notiInfo: { newsId: i.listNewsId } },
                                }}
                                component={RouterLink}>
                                {i[c.id]}
                              </Link>
                            </TableCell>
                          ) : c.id === 'listCategory' ? (
                            <TableCell key={c.id} align='center'>
                              <span
                                className={
                                  i.listCategory === '障害報告'
                                    ? classes.categoryRed
                                    : i.listCategory === 'インフォメーション'
                                    ? classes.categoryBlue
                                    : i.listCategory === 'リリース'
                                    ? classes.categoryGreen
                                    : classes.categoryYellow
                                }>
                                {(i as any)[c.id]}
                              </span>
                            </TableCell>
                          ) : c.id === 'copy' ? (
                            <TableCell key={c.id} align='center'>
                              <Button
                                to={{
                                  pathname: routeList.notificationCreate,
                                  state: { notiInfo: { newsId: i.listNewsId } },
                                }}
                                component={RouterLink}
                                variant='contained'
                                color='primary'>
                                コピーする
                              </Button>
                            </TableCell>
                          ) : c.id === 'greyOutFlag' ? (
                            <Hidden key={c.id}></Hidden>
                          ) : c.id === 'listNewsId' ? (
                            <Hidden key={c.id}></Hidden>
                          ) : c.id === 'listSysVersionNumber' ? (
                            <Hidden key={c.id}></Hidden>
                          ) : (
                            <TableCell key={c.id} align='center'>
                              {(i as any)[c.id]}
                            </TableCell>
                          )
                        )}
                      </TableRow>
                    ))}
                </TableBody>
              </Table>
            </div>
          </PerfectScrollbar>
        </CardContent>
        <CardActions className={classes.singleAction}>
          <Paginate
            pageCount={Math.ceil(notifications.length / magiContants.ROWSPER_PAGE)}
            onPageChange={handleChangePage}
            forcePage={page}
          />
        </CardActions>
      </Card>
      <Dialog onClose={handleClose} open={open}>
        <DialogTitle>{messageMap[option]}</DialogTitle>
        <DialogActions>
          <Button onClick={handleClose}>いいえ</Button>
          <Button onClick={handleOperation} color='primary'>
            はい
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  )
}

export default Results
