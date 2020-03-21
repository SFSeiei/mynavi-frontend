import React from 'react'
import {
  TableHead,
  TableCell,
  TableRow,
  TableSortLabel,
} from '@material-ui/core'
import { Order } from 'utils/misc'
import magiStyles from 'css/magiStyle'

export const headCells = [
  { id: 'clientId' },
  { id: 'clientStaffDepartmentName' },
  { id: 'salesStaff' },
  { id: 'operation' },
]

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
  const clientIdHead = '企業ID<br/>企業名<br/>現在の利用状況'
  const clientStaffDepartmentNameHead = '企業担当者：部署 <br/> 企業担当者：担当者名'
  const salesStaffHead = '営業担当者 <br/> ステータス <br/> アカウント発行状況'
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
            sortDirection={orderBy === headCell.id ? order : false}>
            <TableSortLabel
              className={magiClasses.header}
              active={orderBy === headCell.id}
              direction={order}
              onClick={createSortHandler(headCell.id)}>
              {headCell.id === 'clientId' ? <div dangerouslySetInnerHTML={{__html:clientIdHead}} />
                                          : headCell.id === 'clientStaffDepartmentName'
                                             ? <div dangerouslySetInnerHTML={{__html:clientStaffDepartmentNameHead}} />
                                             : headCell.id === 'salesStaff'
                                                ? <div dangerouslySetInnerHTML={{__html:salesStaffHead}} />
                                                : '操作'}

            </TableSortLabel>
          </TableCell>
        ))}
      </TableRow>
    </TableHead>
  )
}

export default EnhancedTableHead
