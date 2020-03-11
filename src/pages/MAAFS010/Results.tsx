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
  Typography,
} from '@material-ui/core'
import { stableSort, getSorting, Order } from 'utils/misc'
import EnhancedTableHead, { headCells } from './EnhancedTableHead'
import { Paginate } from 'components'
import { MAAFS010OperationLogOutDto } from 'reducers/operationLogReducer'
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

}))

interface Props {
  accounts: MAAFS010OperationLogOutDto[]
  className: string
}

const Results = ({ accounts, className }: Props) => {
  const classes = useStyles()
  const [page, setPage] = useState(0)
  const [order, setOrder] = useState<Order>('asc')
  const [orderBy, setOrderBy] = useState('name')
  const startIndex = page * magiContants.ROWSPER_PAGE
  const endIndex =
    startIndex + magiContants.ROWSPER_PAGE > accounts.length
      ? accounts.length
      : startIndex + magiContants.ROWSPER_PAGE

  const handleRequestSort = (_event: any, property: string) => {
    const isDesc = orderBy === property && order === 'desc'
    setOrder(isDesc ? 'asc' : 'desc')
    setOrderBy(property)
  }
  const handleChangePage = (data: any) => {
    setPage(data.selected)
  }

  return (
    <div className={className}>

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
          <PerfectScrollbar 
              style={
              {
                position :'relative' ,height:400,
              }
             } 
          >
            <div className={classes.inner}>
              <Table stickyHeader>
                <EnhancedTableHead
                  order={order}
                  orderBy={orderBy}
                  onRequestSort={handleRequestSort}
                  rowCount={accounts.length}
                />
                <TableBody>
                  {
                  stableSort(
                    accounts.map(i => ({
                      ...i
                    })),
                    getSorting(order, orderBy)
                    )
                    .slice(startIndex, endIndex)
                    .map(i => (
                      <TableRow>
                        {headCells.map(c =>
                        // c.id === 'manipulationDetail'? (
                        //   <TableCell key={c.id}>
                        //       {(i as any)['manipulationDetail'].length > 50? 
                        //       (i as any)['manipulationDetail'].slice(0,50) + "..."
                        //        : (i as any)['manipulationDetail']}
                        //   </TableCell>
                        //  ) :
                          <TableCell key={c.id}>
                            {(i as any)[c.id]}
                          </TableCell>
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
    </div>
  )
}
export default Results