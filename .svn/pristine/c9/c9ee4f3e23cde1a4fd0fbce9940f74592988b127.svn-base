/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import ReactPaginate, { ReactPaginateProps } from 'react-paginate'
import { colors } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    alignItems: 'center',
  },
  container: {
    ...theme.typography.button,
    listStyle: 'none',
    userSelect: 'none',
    display: 'flex',
    alignItems: 'center',
    '& .selected $pageLink': {
      backgroundColor: colors.blueGrey[50],
      color: theme.palette.text.primary,
    },
    paddingInlineStart: '0',
  },
  activeLink: {
    backgroundColor: colors.blueGrey[50],
    color: theme.palette.text.primary,
  },
  pageLink: {
    color: theme.palette.text.primary,
    padding: theme.spacing(1),
    outline: 'none',
    cursor: 'pointer',
    width: 40,
    height: 40,
    borderRadius: '50%',
    display: 'block',
    textAlign: 'center',
    '&:hover': {
      backgroundColor: colors.blueGrey[50],
      color: theme.palette.text.primary,
    },
    '&$activeLink': {
      backgroundColor: colors.blueGrey[50],
      color: theme.palette.text.primary,
    },
  },
  disabled: {
    cursor: 'not-allowed',
    color: theme.palette.text.disabled,
    '&:hover': {
      backgroundColor: 'inherit',
      color: theme.palette.text.disabled,
    },
  },
  button: {
    width: 40,
    height: 40,
    borderRadius: '50%',
    '&:hover': {
      backgroundColor: colors.blueGrey[50],
      color: theme.palette.text.primary,
    },
  },
}))

type Props = Pick<
  ReactPaginateProps,
  'forcePage' | 'onPageChange' | 'pageCount'
>

const Paginate = (props: Props) => {
  const classes = useStyles()
  const { forcePage, onPageChange, pageCount } = props
  const inFirstPage = forcePage === 0
  const inLastPage = forcePage === pageCount - 1
  const inLastTwoPage = forcePage === pageCount - 2

  const nextClass = `${classes.pageLink} ${inLastPage ? classes.disabled : ''}`
  const previousClass = `${classes.pageLink} ${
    inFirstPage ? classes.disabled : ''
  }`

  const handleClickFirst = () => {
    if (!inFirstPage && onPageChange) {
      onPageChange({ selected: 0 })
    }
  }

  const handleClickLast = () => {
    if (!inLastPage && onPageChange) {
      onPageChange({ selected: pageCount - 1 })
    }
  }

  return (
    <div className={classes.root}>
      <a className={previousClass} onClick={handleClickFirst}>
        &laquo;
      </a>
      <ReactPaginate
        marginPagesDisplayed={0}
        pageRangeDisplayed={inLastPage || inLastTwoPage ? 5 : 4}
        breakLabel=''
        containerClassName={classes.container}
        nextLinkClassName={nextClass}
        previousLinkClassName={previousClass}
        pageLinkClassName={classes.pageLink}
        previousLabel='&lsaquo;'
        nextLabel='&rsaquo;'
        {...props}
      />
      <a className={nextClass} onClick={handleClickLast}>
        &raquo;
      </a>
    </div>
  )
}

export default Paginate
