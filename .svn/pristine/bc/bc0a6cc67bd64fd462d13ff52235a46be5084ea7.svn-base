import React from 'react'
import { TableHead, TableCell, TableRow ,TableSortLabel} from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import { Order } from 'utils/misc'
import magiStyles from 'css/magiStyle'

export const headCells = [
  { id: 'loginId', label: 'ログインID' },
  { id: 'fullName', label: '氏名' },
  { id: 'departmentName', label: '部署名' },
  { id: 'mailAddress', label: 'メールアドレス' },
  { id: 'authorityName', label: '権限' },
  { id: 'status', label: '有効/無効' },
]

const useStyles = makeStyles({
  // root: {
  //   borderTop: '1px solid #eeeeee',
  //   backgroundColor: '#f2f2f2',
  // },
  // header: {
  //   whiteSpace: 'nowrap',
  // },
  selectAll: {
    width: '90px',
    paddingLeft: '10px',
    cursor: 'pointer',
    '& span': {
      backgroundColor: 'gray',
      color: 'white',
      padding: '2px',
      borderRadius: '2px',
    },
  },
})

interface EnhancedTableProps {
  numSelected: number
  onRequestSort: (event: any, property: string) => void
  onSelectAllClick: () => void
  order: Order
  orderBy: string
  rowCount: number
}

function EnhancedTableHead(props: EnhancedTableProps) {
  const { onSelectAllClick, numSelected, rowCount, order, orderBy, onRequestSort } = props
  const classes = useStyles()
  const magiClasses = magiStyles()
  const createSortHandler = (property: string) => (event: any) => {
    onRequestSort(event, property)
  }
  return (
    <TableHead className={magiClasses.rootEnhancedTableHead}>
      <TableRow>
        <TableCell
          padding='checkbox'
          onClick={onSelectAllClick}
          className={classes.selectAll}>
          <span>{numSelected === rowCount ? '全解除' : '全チェック'}</span>
        </TableCell>
        {headCells.map(headCell => (
          <TableCell align='center' key={headCell.id} sortDirection={orderBy === headCell.id ? order : false}>
            <TableSortLabel
              className={magiClasses.header}
              active={orderBy === headCell.id}
              direction={order}
              onClick={createSortHandler(headCell.id)}>
              {headCell.label}
            </TableSortLabel>
          </TableCell>
        ))}
      </TableRow>
    </TableHead>
  )
}

export default EnhancedTableHead
