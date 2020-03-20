import React from 'react'
import {
  TableHead,
  TableCell,
  TableRow,
  TableSortLabel,
} from '@material-ui/core'
import { Order } from 'utils/misc'
import magiStyles from 'css/magiStyle'

//申込情報一覧のタイトル
export const headCells = [
  { id: 'contractId', label: '申込ID' },
  { id: 'companyId', label: '企業ID' },
  { id: 'companyName', label: '企業名' },
  { id: 'usagePeriod', label: '利用期間' },
  { id: 'contractTypeName', label: '申込種別' },
  { id: 'salesStaffInChargeName', label: '営業担当' },
  { id: 'statusName', label: 'ステータス' },
  { id: 'login', label: '操作' },
]

interface EnhancedTableProps {
  onRequestSort: (event: any, property: string) => void
  order: Order
  orderBy: string
  rowCount: number
}

function EnhancedTableHead(props: EnhancedTableProps) {
  const { order, orderBy, onRequestSort } = props

  const magiClasses = magiStyles()

  const createSortHandler = (property: string) => (event: any) => {
    onRequestSort(event, property)
  }

  return (
    <TableHead className={magiClasses.rootEnhancedTableHead}>
      <TableRow>
        {headCells.map(headCell => (
          <TableCell
            key={headCell.id}
            sortDirection={orderBy === headCell.id ? order : false}>
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
