import React from 'react'
import {
  TableHead,
  TableCell,
  TableRow,
  TableSortLabel,
  Checkbox,
} from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'

import { Order } from 'utils/misc'
import magiStyles from 'css/magiStyle'

export const headCells = [
  { id: 'loginId', label: 'ログインID' },
  { id: 'fullName', label: '担当者名部署名' },
  { id: 'mailAddress', label: 'メールアドレス電話番号' },
  { id: 'contractMediaName', label: '媒体名' },
  { id: 'accountType', label: 'アカウント種別' },
  { id: 'recruitmentGroupName', label: '採用グループ' },
  { id: 'validFlag', label: 'ステータス' },
  { id: 'lastLoginTimeShow', label: '最終ログイン日時' },
  { id: 'temporaryPasswordIssuance', label: '操作' },
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
  numSelected: number
  onRequestSort: (event: any, property: string) => void
  onSelectAllClick: (event: any, checked: boolean) => void
  order: Order
  orderBy: string
  rowCount: number
}

function EnhancedTableHead(props: EnhancedTableProps) {
  const {
    onSelectAllClick,
    order,
    orderBy,
    numSelected,
    rowCount,
    onRequestSort,
  } = props

  const fullNameHead = '担当者名<br/>部署名'
  const mailAddressHead = 'メールアドレス<br/>電話番号'
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
              {headCell.id === 'fullName'?
              <div dangerouslySetInnerHTML={{__html:fullNameHead}} />
              : headCell.id === 'mailAddress'?
              <div dangerouslySetInnerHTML={{__html:mailAddressHead}} />
              :headCell.label}
            </TableSortLabel>
          </TableCell>
        ))}
      </TableRow>
    </TableHead>
  )
}

export default EnhancedTableHead
