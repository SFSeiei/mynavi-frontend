import React, { useState } from 'react'
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
  Typography,
  colors,
  Dialog,
  DialogTitle,
  DialogActions,
} from '@material-ui/core'
import { useSelector } from 'react-redux'
import { stableSort, getSorting, Order } from 'utils/misc'
import EnhancedTableHead, { headCells } from './EnhancedTableHead'
import { useDispatch } from 'react-redux'
import { messageData ,rowDateInitialValues } from './formConfig'
import { Paginate } from 'components'
import {companyAccountInfo, setLoginID} from 'reducers/companyReducer';
import {magiContants} from 'utils/contants';
import { RootState } from 'reducers'

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
  Invalid: {
    display: 'none'
  },
  count: {
    padding: theme.spacing(0, 1.5),
  },
  none:{
  },
  invalidGrey: {
    backgroundColor: colors.grey[500],
  },
}))

interface Props {
  results: companyAccountInfo[]
  className: string
}

const Results = ({ results, className }: Props) => {
  const classes = useStyles()
  const dispatch = useDispatch()
  const [open, setOpen] = useState(false)
  const [message, setMessage] = useState('')
  const [rowData, setRowData] = useState(rowDateInitialValues)
  const [selectedAccounts, setSelectedAccounts] = useState([] as string[])
  const companyName = useSelector(
    (state: RootState) => state.company.companyAccountSearchCondition.clientName
  )
  const [page, setPage] = useState(0)
  const [order, setOrder] = useState<Order>('asc')
  const [orderBy, setOrderBy] = useState('name')
  const startIndex = page * magiContants.ROWSPER_PAGE
  const endIndex =
    startIndex + magiContants.ROWSPER_PAGE > results.length
      ? results.length
      : startIndex + magiContants.ROWSPER_PAGE





  const handleSelectAll = (event: any) => {
    setSelectedAccounts(event.target.checked ? results.map(i => i.companyAccountId) : [])
  }

  const handleRequestSort = (_event: any, property: string) => {
    const isDesc = orderBy === property && order === magiContants.DESC
    setOrder(isDesc ? 'asc' : 'desc')
    setOrderBy(property)
  }

  const handleChangePage = (data: any) => {
    setPage(data.selected)
  }

  const handleButten = (data: any) => {
    setRowData(data)
    setMessage(messageData(data.loginId,data.fullName))
    setOpen(true)
  }

  const handleClose = (data: any) => {
    setOpen(false)
  }

  const handleOperation = () => {
    const MAACS040IdRequest = {
      loginId: rowData.loginId,
      sysVersionNumber: rowData.sysVersionNumber,
      companyName: companyName,
      fullName: rowData.fullName,
      mailAddress: rowData.mailAddress,
    }
    dispatch(setLoginID(MAACS040IdRequest))
  }


  return (
    <div className={className}>
      <Card>
        <CardActions className={classes.actions}>
        <Typography className={classes.count}>{`${
            results.length
          } 件中 ${startIndex + 1}-${endIndex} 件表示`}</Typography>
          <Paginate
            pageCount={Math.ceil(results.length / magiContants.ROWSPER_PAGE)}
            forcePage={page}
            onPageChange={handleChangePage}
          />
        </CardActions>
        <CardContent className={classes.content}>
          <PerfectScrollbar>
            <div className={classes.inner}>
              <Table >
                <EnhancedTableHead
                  numSelected={selectedAccounts.length}
                  order={order}
                  orderBy={orderBy}
                  onSelectAllClick={handleSelectAll}
                  onRequestSort={handleRequestSort}
                  rowCount={results.length}
                />
                <TableBody>
                  {stableSort(
                    results.map(i => ({
                      ...i,
                    })),
                    getSorting(order, orderBy)
                  )
                    .slice(page * magiContants.ROWSPER_PAGE, page * magiContants.ROWSPER_PAGE + magiContants.ROWSPER_PAGE)
                    .map(i => (
                      <TableRow
                        className={i.validFlag === '無効' ? classes.invalidGrey : classes.none}
                        key={i.companyAccountId}
                        >
                        {headCells.map(c =>
                          c.id === 'temporaryPasswordIssuance'?(
                            <TableCell key={c.id}>
                            <Button
                             variant='contained'
                             color='primary'
                             className={i.validFlag === '無効' ?i.magiFlag === '1'?classes.Invalid:classes.none:classes.none}
                             onClick={ () => handleButten(i)}
                            >
                             仮パスワード発行
                            </Button>
                          </TableCell>
                          ) 
                          : c.id === 'fullName'?(
                            <TableCell key={c.id}>
                                {(i as any)['fullName']}
                                <br />
                                {(i as any)['department']}
                            </TableCell>
                          )
                          : c.id === 'mailAddress'?(
                            <TableCell key={c.id}>
                                {(i as any)['mailAddress']}
                                <br />
                                {(i as any)['phoneNumber']}
                            </TableCell>
                          ) 
                          :(<TableCell key={c.id}>{(i as any)[c.id]}</TableCell>)
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
            pageCount={Math.ceil(results.length / magiContants.ROWSPER_PAGE)}
            onPageChange={handleChangePage}
            forcePage={page}
          />
        </CardActions>
        <Dialog onClose={handleClose} open={open}>
          <DialogTitle><div dangerouslySetInnerHTML={{__html:message}}/></DialogTitle>
          <DialogActions>
            <Button onClick={handleClose}>いいえ</Button>
            <Button onClick={handleOperation} color='primary'>
              はい
            </Button>
          </DialogActions>
        </Dialog>
      </Card>
    </div>
  )
}

export default Results
