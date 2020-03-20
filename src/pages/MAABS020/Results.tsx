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
  colors,
  Typography,
  Dialog,
  DialogTitle,
  DialogActions,
} from '@material-ui/core'
import { stableSort, getSorting, Order } from 'utils/misc'
import EnhancedTableHead, { headCells } from './EnhancedTableHead'
import { Accounts ,  updateByValid , updateByInValid, updateByPassword,inValidCheck,setinValidCheckCount, getAccountDetail} from 'reducers/accountReducer'
import {MAABS020IdRequest} from 'types/MAABS020IdRequest'
import { useDispatch , useSelector } from 'react-redux'
import { messageMap } from './formConfig'
import { Paginate } from 'components'
import { RootState } from 'reducers'
import {magiContants} from 'utils/contants';

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
  },
  none:{
  }

}))

interface Props {
  accounts: Accounts[]
  className: string
}

const Results = ({ accounts, className }: Props) => {
  const classes = useStyles()
  const dispatch = useDispatch()

  const [open, setOpen] = useState(false)
  const [selectedAccounts, setSelectedAccounts] = useState([] as number[])
  const [page, setPage] = useState(0)
  const [order, setOrder] = useState<Order>('asc')
  const [orderBy, setOrderBy] = useState('name')
  const { permissions } = useSelector((state: RootState) => state.globalMenu)
  const inValidCheckCount = useSelector((state: RootState) => state.account.inValidCheckCount)
  const startIndex = page * magiContants.ROWSPER_PAGE
  const endIndex =
    startIndex + magiContants.ROWSPER_PAGE > accounts.length
      ? accounts.length
      : startIndex + magiContants.ROWSPER_PAGE

  const handleClose = () => {
    dispatch(setinValidCheckCount(0))
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

  const handleUpdate = () => {
    if(option === 'disable'){
      const accountUpdateList: MAABS020IdRequest[] = [];
      selectedAccounts.forEach(i => {
        const account = accounts.find(x => x.managerId === i)
        if (account) {
          accountUpdateList.push({
            listId: account.managerId,
            listVersionMgrAuz: account.sysVersionNumberMgrAuz,
            listVersionAdmin: account.sysVersionNumberAdmin
          })
        }
     })
  
     //無効チェック
     dispatch(
      inValidCheck({
        data:  accountUpdateList ,
        message: '選択されたアカウントを無効にしました',
      })
    )

  }else{
    dispatch(setinValidCheckCount(0))
  }

    setOpen(true)
  }

  

  const handleOperation = () => {
      if(inValidCheckCount === 1){
        setOpen(false)
        setOption('disableCheck')
        dispatch(setinValidCheckCount(0))
        setOpen(true)

      }else{
        handleSubmit()
      }
       
  }

  const handleSubmit = () => {
    setOpen(false)
    const accountUpdateList: MAABS020IdRequest[] = [];
    selectedAccounts.forEach(i => {
      const account = accounts.find(x => x.managerId === i)
      if (account) {
        accountUpdateList.push({
          listId: account.managerId,
          listVersionMgrAuz: account.sysVersionNumberMgrAuz,
          listVersionAdmin: account.sysVersionNumberAdmin
        })
      }
    })

    if (option === 'enable') {
      dispatch(
        updateByValid({
          data:  accountUpdateList ,
          message: '選択されたアカウントを有効にしました',
        })
      )
    }
    if (option === 'disableCheck') {
      dispatch(
        updateByInValid({
          data:  accountUpdateList ,
          message: '選択されたアカウントを無効にしました',
        })
      )
    }
    if (option === 'disable') {
      dispatch(
        updateByInValid({
          data:  accountUpdateList ,
          message: '選択されたアカウントを無効にしました',
        })
      )
    }
    if (option === 'resetPassword') {
      dispatch(
        updateByPassword({
          data: accountUpdateList ,
          message: '選択されたアカウントに対し、パスワードを再発しました',
        })
      )
    }
    setSelectedAccounts([])

  }

  const handleSelectAll = () => {
    setSelectedAccounts(() =>
    selectedAccounts.length < Math.ceil(endIndex - startIndex)
      ? accounts.slice(startIndex, endIndex).map(i => i.managerId)
      : []
   )
  }

  const linkClick = (data: any) => {
    dispatch(getAccountDetail(data.managerId))
  }

  const handleSelectOne = (_event: any, id: number) => {
    const selectedIndex = selectedAccounts.indexOf(id)
    let newSelectedCustomers: number[] = []

    if (selectedIndex === -1) {
      newSelectedCustomers = newSelectedCustomers.concat(selectedAccounts, id)
    } else if (selectedIndex === 0) {
      newSelectedCustomers = newSelectedCustomers.concat(
        selectedAccounts.slice(1)
      )
    } else if (selectedIndex === selectedAccounts.length - 1) {
      newSelectedCustomers = newSelectedCustomers.concat(
        selectedAccounts.slice(0, -1)
      )
    } else if (selectedIndex > 0) {
      newSelectedCustomers = newSelectedCustomers.concat(
        selectedAccounts.slice(0, selectedIndex),
        selectedAccounts.slice(selectedIndex + 1)
      )
    }

    setSelectedAccounts(newSelectedCustomers)
  }

  const handleRequestSort = (_event: any, property: string) => {
    const isDesc = orderBy === property && order === magiContants.DESC
    setOrder(isDesc ? 'asc' : 'desc')
    setOrderBy(property)
  }

  const handleChangePage = (data: any) => {
    setSelectedAccounts([])
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
            <MenuItem value='resetPassword'>パスワードを再発行する</MenuItem>
            <MenuItem value='disable'>無効にする</MenuItem>
            <MenuItem value='enable'>有効にする</MenuItem>
          </Select>
        </FormControl>
        <Button
          disabled={!option || selectedAccounts.length === 0}
          variant='contained'
          color='primary'
          onClick={handleUpdate}>
          実行する
        </Button>
      </div>
      <Card className={className}>
        <CardActions className={classes.actions}>
          <Typography className={classes.count}>{`${
            accounts.length
          } 件中 ${startIndex + 1}-${endIndex} 件表示`}</Typography>
          <Paginate
            pageCount={Math.ceil(accounts.length / magiContants.ROWSPER_PAGE)}
            forcePage={page}
            onPageChange={handleChangePage}
          />
        </CardActions>
        <CardContent className={classes.content}>
          <PerfectScrollbar>
            <div className={classes.inner}>
              <Table>
                <EnhancedTableHead
                  numSelected={selectedAccounts.length}
                  onSelectAllClick={handleSelectAll}
                  rowCount={Math.ceil(endIndex - startIndex)}
                  order={order}
                  orderBy={orderBy}
                  onRequestSort={handleRequestSort}
                />
                <TableBody>
                  {stableSort(
                    accounts.map(i => ({
                      ...i,
                    })),
                    getSorting(order, orderBy)
                  )
                    .slice(startIndex, endIndex)
                    .map(i => (
                      <TableRow
                      className={i.status === '無効' ? classes.invalidGrey : classes.none}
                        //hover
                        key={i.managerId}
                        selected={selectedAccounts.indexOf(i.managerId) !== -1}>
                        <TableCell padding='checkbox'>
                          <Checkbox
                            checked={selectedAccounts.indexOf(i.managerId) !== -1}
                            color='primary'
                            onChange={event => handleSelectOne(event, i.managerId)}
                            value={selectedAccounts.indexOf(i.managerId) !== -1}
                          />
                        </TableCell>
                        {headCells.map(c =>
                          c.id === 'loginId' ? ((permissions.includes(magiContants.AUTHORITYID_10) ? 
                          <TableCell key={c.id}>
                              <Link
                                className={classes.linkCell}
                                onClick={ () => linkClick(i)}>
                                {i[c.id]}
                              </Link>
                            </TableCell>
                          : ( i['authoritySystemFlag'] === magiContants.AUTHORITYSYSTEMFLAG_0 ? 
                                <TableCell key={c.id}>
                                <Link
                                  className={classes.linkCell}
                                  onClick={ () => linkClick(i)}>
                                  {i[c.id]}
                                </Link>
                              </TableCell>
                             :
                             <TableCell key={c.id}>{(i as any)[c.id]}</TableCell>
                            )
                           )
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
            pageCount={Math.ceil(accounts.length / magiContants.ROWSPER_PAGE)}
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
