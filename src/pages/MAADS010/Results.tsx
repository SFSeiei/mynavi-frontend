import React, { useState, useEffect } from 'react'
import { Link as RouterLink } from 'react-router-dom'
import PerfectScrollbar from 'react-perfect-scrollbar'
import { makeStyles } from '@material-ui/core/styles'
import {
  Card,
  CardActions,
  CardContent,
  Table,
  TableBody,
  TableCell,
  TableRow,
  Button,
  Link,
  colors,
  Typography,
  Dialog,
  DialogTitle,
  DialogActions,
} from '@material-ui/core'

import { stableSort, getSorting, Order } from 'utils/misc'
import EnhancedTableHead, { headCells } from './EnhancedTableHead'
import { ApplicationList, loginMagiClientId } from 'reducers/applicationReducer'
import { Paginate } from 'components'
import { routeList } from 'routes/routes'
import { getMessage } from 'common/messageUtil'
import { useDispatch } from 'react-redux'
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
    padding: 0,
    justifyContent: 'space-between',
  },
  singleAction: {
    padding: theme.spacing(1.5, 0),
    justifyContent: 'flex-end',
  },
  formControl: {
    minWidth: 180,
    margin: theme.spacing(0, 1),
  },
  selectGroup: {
    display: 'flex',
    alignItems: 'center',
    margin: theme.spacing(1.5),
  },
  formGroup: {
    padding: theme.spacing(1),
    margin: '0px 24px 0',
  },
  confirmButton: {
    minWidth: 100,
    color: (theme.palette as any).white,
    backgroundColor: colors.blue[600],
    '&:hover': {
      backgroundColor: colors.blue[900],
    },
  },
  invalidGrey: {
    backgroundColor: colors.grey[500],
  },
  none: {},
  Normal: {
    alignItems: 'center',
    // borderRadius: '12px',
    backgroundColor: '#97d077',
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
  Employment: {
    alignItems: 'center',
    // borderRadius: '12px',
    backgroundColor: '#ff8000',
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
  JobChange: {
    alignItems: 'center', 
    // borderRadius: '12px',
    backgroundColor: '#3399ff',
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
  applications: ApplicationList[]
  className: string
}

const Results = ({ applications, className }: Props) => {
  const classes = useStyles()
  const [open, setOpen] = useState(false)
  const [page, setPage] = useState(0)
  useEffect(() => {
    setPage(0)
  }, [applications])
  const [order, setOrder] = useState<Order>('asc')
  const [orderBy, setOrderBy] = useState('name')
  const startIndex = page * magiContants.ROWSPER_PAGE
  const endIndex =
    startIndex + magiContants.ROWSPER_PAGE > applications.length
      ? applications.length
      : startIndex + magiContants.ROWSPER_PAGE

  /**
   * Select Field
   */

  const handleClick = () => {
    setOpen(true)
  }
  const handleCancel = () => {
    setOpen(false)
  }
  const handleClose = () => {
    setOpen(false)
  }

  const dispatch = useDispatch()
  const handleDialog = () => {
    // ログイン
    dispatch(loginMagiClientId())
    handleClose()
  }
  const handleRequestSort = (_event: any, property: string) => {
    const isDesc = orderBy === property && order === magiContants.DESC
    setOrder(isDesc ? 'asc': 'desc')
    setOrderBy(property)
  }
  const handleChangePage = (data: any) => {
    setPage(data.selected)
  }

  return (
    <div className={className}>
      <Card>
        <CardActions className={classes.actions}>
          <Typography variant='button' className={classes.formGroup}>
            {applications.length}件中　 {startIndex + 1}-{endIndex}件表示
          </Typography>
          <Paginate
            pageCount={Math.ceil(applications.length / magiContants.ROWSPER_PAGE)}
            forcePage={page}
            onPageChange={handleChangePage}
          />
        </CardActions>
        <CardContent className={classes.content}>
          <PerfectScrollbar
            style={{
              position: 'relative',
              height: 500,
            }}>
            <div className={classes.inner}>
              <Table stickyHeader>
                <EnhancedTableHead
                  order={order}
                  orderBy={orderBy}
                  onRequestSort={handleRequestSort}
                  rowCount={applications.length}
                />
                <TableBody>
                  {stableSort(
                    applications.map(i => ({
                      ...i,
                    })),
                    getSorting(order, orderBy)
                  )
                    .slice(page * magiContants.ROWSPER_PAGE, page * magiContants.ROWSPER_PAGE + magiContants.ROWSPER_PAGE)
                    .map(i => (
                      // グレーアウトフラグの判断、１の場合、申込はグレーアウトとする。
                      <TableRow
                        className={
                          i.grayFlag === '1'
                            ? classes.invalidGrey
                            : classes.none
                        }>
                        {headCells.map(c =>
                          c.id === 'contractId' ? (
                            <TableCell key={c.id}>
                              {/* 申込IDラベルフラグの判断、0の場合、linkを実行する */}
                              {i.labelFlag === '0' ? (
                                <Link
                                  to={{
                                    pathname: routeList.applicationDetail,
                                    state: i[c.id],
                                  }}
                                  component={RouterLink}>
                                  {i[c.id]}
                                </Link>
                              ) : (
                                // 申込IDラベルフラグの判断、１の場合、ラベルにする
                                i[c.id]
                              )}
                            </TableCell>
                          ) : c.id === 'salesStaffInChargeName' ? (
                            <TableCell key={c.id}>
                              {(i as any)['companyStaffDepartmentName']}
                              <br />
                              {(i as any)['salesStaffInChargeName']}
                            </TableCell>
                          ) : c.id === 'login' ? (
                            <TableCell key={c.id}>
                              <Button
                                onClick={handleClick}
                                className={classes.confirmButton}
                                variant='contained'>
                                ログイン
                              </Button>
                            </TableCell>
                          ) : c.id === 'contractType'?(
                            <TableCell key={c.id}>
                              <span className={(i as any)[c.id] !== '通常'
                            ? (i as any)[c.id] === '転職ナビ'
                              ? classes.JobChange
                              : classes.Employment
                            : classes.Normal}>{(i as any)[c.id]}</span></TableCell>
                          ) : (
                            <TableCell key={c.id}>{(i as any)[c.id]}</TableCell>
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
            pageCount={Math.ceil(applications.length / magiContants.ROWSPER_PAGE)}
            forcePage={page}
            onPageChange={handleChangePage}
          />
        </CardActions>
      </Card>
      <Dialog onClose={handleCancel} open={open}>
        <DialogTitle>{getMessage('MAADS010-002')}</DialogTitle>
        <DialogActions>
          <Button onClick={handleCancel}>いいえ</Button>
          <Button onClick={handleDialog} color='primary'>
            はい
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  )
}

export default Results
