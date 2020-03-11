import React, { useState, useEffect } from 'react'
import {
  TableHead,
  TableCell,
  TableRow,
  TableSortLabel,
  Checkbox,
} from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'

import { Order } from 'utils/misc'

export const headCells = [
  { id: 'listCategory', label: '分類' },
  { id: 'listSubject', label: 'タイトル' },
  { id: 'listPublicDate', label: '公開期間' },
  { id: 'listPublicTarget', label: '公開対象' },
  { id: 'listPublicFlag', label: '公開状態' },
  { id: 'listPublicStatus', label: '公開ステータス' },
  { id: 'listUpdateTime', label: '更新日時' },
  { id: 'listUpdaterId', label: '更新者' },
  { id: 'listNewsAttachmentCount', label: '添付ファイル有無' },
  { id: 'copy', label: '操作' },
]

const useStyles = makeStyles({
  root: {
    borderTop: '1px solid #eeeeee',
    backgroundColor: '#f2f2f2',
  },
  header: {
    whiteSpace: 'nowrap',
  },
  selectAll: {
    textAlign: 'center',
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
  tableCell: {
    textAlign: 'center'
  },
  tableCellCategory: {
    width:'170px',
    textAlign: 'center'
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
  const {
    onSelectAllClick,
    order,
    orderBy,
    numSelected,
    rowCount,
    onRequestSort,
  } = props

  const classes = useStyles()

  const createSortHandler = (property: string) => (event: any) => {
    onRequestSort(event, property)
  }

  return (
    <TableHead className={classes.root}>
      <TableRow>
        <TableCell
          padding='checkbox'
          onClick={onSelectAllClick}
          className={classes.selectAll}>
          <span>{numSelected === rowCount ? '全解除' : '全チェック'}</span>
        </TableCell>
        {headCells.map(headCell => (
          <TableCell
            className={
              headCell.id == 'listCategory'
              ? classes.tableCellCategory
              : classes.tableCell
            }
            key={headCell.id}
            sortDirection={orderBy === headCell.id ? order : false}>
            <TableSortLabel
              className={classes.header}
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
