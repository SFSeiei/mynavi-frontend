import React, { useState } from 'react'
import { Link as RouterLink } from 'react-router-dom'
import { magiContants } from 'utils/contants';
import PerfectScrollbar from 'react-perfect-scrollbar'
import { makeStyles } from '@material-ui/core/styles'
import { useDispatch } from 'react-redux'
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
import { routePermissionList, routeList } from 'routes/routes'
import { stableSort, getSorting, Order } from 'utils/misc'
import EnhancedTableHead, { headCells } from './EnhancedTableHead'
import { CompanyList,
         accountIssuance,
         temporaryPasswordIssuance 
} from 'reducers/companyReducer'
import { setOperationLogSearchDate } from 'reducers/operationLogReducer'
import { setSearchCondition,getCompanyDetail } from 'reducers/companyReducer'
import { proxyLogin } from 'reducers/userReducer'
import { messageData,
         rowDateInit,
 } from './formConfig'
import { Paginate } from 'components'
import { getRangeDate } from 'utils/dateConfig'
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
  },
  confirmButton: {
    margin: '2px 2px 0',
    minWidth: 100,
    color: (theme.palette as any).white,
    backgroundColor: colors.blue[600],
    '&:hover': {
      backgroundColor: colors.blue[900],
    },
  },
}))
interface UserInfo {
  permissions: string[]
  managerId: string
}
interface Props {
  userInfo:UserInfo
  companys: CompanyList[]
  className: string
}

const Results = ({userInfo, companys, className}: Props) => {
  const classes = useStyles()
  const permissionsList = [magiContants.AUTHORITYID_10, magiContants.AUTHORITYID_40, magiContants.AUTHORITYID_50];
  const [open, setOpen] = useState(false)
  const [type, setType] = useState('')
  const [page, setPage] = useState(0)
  const [usagePeriod] = useState(getRangeDate(-30))
  const [rowData, setRowData] = useState(rowDateInit)
  const [order, setOrder] = useState<Order>('asc')
  const [orderBy, setOrderBy] = useState('name')
  const [message, setMessage] = useState('')
  const { permissions, managerId } = userInfo
  const dispatch = useDispatch()
  const startIndex = page * magiContants.ROWSPER_PAGE
  const endIndex =
    startIndex + magiContants.ROWSPER_PAGE > companys.length
      ? companys.length
      : startIndex + magiContants.ROWSPER_PAGE
  const handleClose = () => {
    setOpen(false)
  }
  const handleButten = (types: string,data: any) => {
    setType(types)
    setRowData(data)
    setMessage(messageData(types,data.companyId,data.companyName))
    setOpen(true)
  }
  const handleRequestSort = (event: any, property: string) => {
    const isDesc = orderBy === property && order === 'desc'
    setOrder(isDesc ? 'asc' : 'desc')
    setOrderBy(property)
  }
  const handleChangePage = (data: any) => {
    setPage(data.selected)   
  }
  const handleOperation = () => {
    const clientIdRequestData  = {
      companyId: rowData.companyId,
      companyName:rowData.companyName,
      companyContractMediaId: rowData.companyContractMediaId,
      companyStaffDepartmentName: rowData.accountIssuanceStatementName,
      companyStaffName: rowData.companyStaffName,
      mailAddress: rowData.mailAddress,
      companyAccountId: rowData.companyAccountId,
      sysVersionNumber: rowData.sysVersionNumber,
    };
    setOpen(false)
    if (type === 'login') {
        dispatch(proxyLogin())
      }else if (type === 'accountIssuance') {
        dispatch(accountIssuance(clientIdRequestData))
      }else {
        dispatch(temporaryPasswordIssuance(clientIdRequestData))
    }    
    setRowData(rowDateInit)
    setMessage('')
  }

  const linkClick = (data : any) => {
    dispatch(getCompanyDetail(data.companyId))
  }
  /**
   * Select Field
   */
  return (
    <div className={className}>
      <Card>
        <CardActions className={classes.actions}>
            <Typography variant='button' className={classes.formGroup}>
            {`${companys.length} 件中 ${startIndex + 1}-${endIndex} 件表示`}
            </Typography>
          <Paginate
            pageCount={Math.ceil(companys.length / magiContants.ROWSPER_PAGE)}
            forcePage={page}
            onPageChange={handleChangePage}
          />
        </CardActions>
        <CardContent className={classes.content}>
          <PerfectScrollbar 
           style={
             {
               position :'relative' ,height:500,
             }
           }  >
            <div className={classes.inner}>
              <Table stickyHeader>
              <EnhancedTableHead
                  order={order}
                  orderBy={orderBy}
                  onRequestSort={handleRequestSort}
                  rowCount={companys.length}
                />
                <TableBody>                 
                   {stableSort(
                    companys.map(i => ({
                      ...i
                    })),
                    getSorting(order, orderBy)
                    )
                    .slice(page * magiContants.ROWSPER_PAGE, page * magiContants.ROWSPER_PAGE + magiContants.ROWSPER_PAGE)
                    .map(i => (
                      <TableRow  key={(i as any)['companyId']}>
                        {headCells.map(c =>
                          c.id === 'clientId' ? (
                            <TableCell key={c.id}>
                                {(i as any)['companyId']}
                                <br />
                              {permissions.some(j => routePermissionList[routeList.companyAccount].includes(j))
                               ? <Link
                                  to={''}
                                  onClick={ () => linkClick(i)}
                                  component={RouterLink}>
                                  {(i as any)['companyName']}
                                </Link>
                              : (i as any)['companyName']
                              }
                              <br />
                              {(i as any)['currentlyInUseName']}
                            </TableCell>
                          ) 
                          : c.id === 'clientStaffDepartmentName' ? (
                            <TableCell key={c.id}>
                              {(i as any)['companyStaffDepartmentName']}
                              <br />
                              {(i as any)['companyStaffName']}
                            </TableCell>
                          )
                          : c.id === 'salesStaff' ? (
                            <TableCell key={c.id}>
                              {(i as any)['salesStaffInChargeName']}
                              <br />
                              {(i as any)['statusName']}
                              <br />
                              {(i as any)['accountIssuanceStatementName']}
                            </TableCell>
                          )
                          : (
                            <TableCell key={c.id} align="right">
                              {permissions.some(x => permissionsList.includes(x))
                                ? <Button  type='submit' className={classes.confirmButton} variant='contained'
                                    onClick={ () => handleButten('login',i)} >
                                    ログイン
                                  </Button>
                                : ''
                              }
                              {permissions.some(y => permissionsList.includes(y))
                                ? <Button component={RouterLink}
                                          to={
                                            {
                                              pathname: routeList.operationLog,
                                              state:{clientId: (i as any)['companyId'], //企業ID
                                                     clientName: (i as any)['companyName'],
                                                     usagePeriodFromYMD: usagePeriod,
                                                    }
                                            }}
                                          className={classes.confirmButton} variant='contained'>
                                    操作ログ
                                  </Button>
                                : ''
                              }
                              {permissions.includes(magiContants.AUTHORITYID_60) &&
                               !permissions.some(z => permissionsList.includes(z)) &&  (i.managerId === null || i.managerId.toString() !== managerId)
                                ? ''
                                : <Button component={RouterLink}
                                    to={{
                                      pathname: routeList.application,
                                      state:(i as any)['companyId'],
                                    }} 
                                    className={classes.confirmButton} variant='contained'>
                                    申込一覧
                                  </Button>
                              }
                              {(permissions.includes(magiContants.AUTHORITYID_60) &&
                               !permissions.some(z => permissionsList.includes(z)) && (i.managerId === null || i.managerId.toString() !== managerId))
                                                 || i.status === magiContants.STATUSINVALID || i.companyStaffName === magiContants.COMPANYSTAFFNAME_NULL 
                                ? ''
                                : i.accountIssuanceStatement === magiContants.ACCOUNTISSUANCE_STATEMENT
                                  ?  <Button 
                                       onClick={ () => handleButten('accountIssuance',i)} 
                                       className={classes.confirmButton} variant='contained'>
                                       アカウント発行
                                    </Button>
                                  :  <Button 
                                      onClick={ () => handleButten('temporaryPasswordIssuance',i)} 
                                      className={classes.confirmButton} variant='contained'>
                                      仮パスワード発行
                                   </Button> 
                              }
                              {permissions.includes(magiContants.AUTHORITYID_60) &&
                               !permissions.some(z => permissionsList.includes(z)) && (i.managerId === null || i.managerId.toString() !== managerId)
                                ? ''
                                : <Button component={RouterLink}
                                    to={
                                     {
                                      pathname: routeList.companyAccount,
                                      state:{clientId: (i as any)['companyId'], //企業ID
                                             clientName: (i as any)['companyName'],
                                            }
                                    }}
                                    className={classes.confirmButton} variant='contained'>
                                    アカウント一覧
                                  </Button>
                              }                        
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
            pageCount={Math.ceil(companys.length / magiContants.ROWSPER_PAGE)}
            forcePage={page}
            onPageChange={handleChangePage}
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