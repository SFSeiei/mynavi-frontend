import React from 'react'
import {
  TableHead,
  TableCell,
  TableRow,
  TableSortLabel,
} from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import { Order } from 'utils/misc'
import magiStyles from 'css/magiStyle'

export const headCells = [
  { id: 'manipulationTime', label: '操作日時' },
  { id: 'manipulationTypeName', label: '操作種別' },
  { id: 'loginId', label: '操作者ID' },
  { id: 'fullName', label: '操作者名' },
  { id: 'ipAddress', label: 'IPアドレス' },
  { id: 'manipulationDetail', label: '操作概要' }, 
]
const useStyles = makeStyles({
  // root: {
  //   borderTop: '1px solid #eeeeee',
  //   backgroundColor: '#f2f2f2',
  // },
  // header: {
  //   whiteSpace: 'nowrap',
  // },
})

interface EnhancedTableProps {
  onRequestSort: (event: any, property: string) => void
  order: Order
  orderBy: string
  rowCount: number
}

function EnhancedTableHead(props: EnhancedTableProps) {
  const { 
    order,
    orderBy,
    onRequestSort,
  } = props
  const magiClasses = magiStyles()

  const createSortHandler = (property: string) => (event: any) => {
    onRequestSort(event, property)
  }
  return (
    <TableHead className={magiClasses.rootEnhancedTableHead}>
      <TableRow>
        {headCells.map(headCell => (
          <TableCell 
          align='center'
          key={headCell.id}
          sortDirection={orderBy === headCell.id ? order : false}
          >
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