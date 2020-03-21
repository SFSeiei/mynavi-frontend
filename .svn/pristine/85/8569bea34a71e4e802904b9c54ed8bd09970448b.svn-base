import React, { Suspense } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { LinearProgress } from '@material-ui/core'

import TopBar from './TopBar'
import { Footer } from 'components'
import { renderRoutes, RouteConfigComponentProps } from 'react-router-config'

const useStyles = makeStyles(theme => ({
  content: {
    height: '100%',
    display: 'grid',
    gridTemplateRows: '1fr auto',
    '-ms-grid-rows': '1fr auto',
    '-ms-grid-columns': '1fr',
    '& > *:nth-child(1)': {
      '-ms-grid-row': 1,
      '-ms-grid-column': 1,
    },
    '& > *:nth-child(2)': {
      '-ms-grid-row': 2,
      '-ms-grid-column': 1,
    },
    paddingTop: 56,
    [theme.breakpoints.up('sm')]: {
      paddingTop: 64,
    },
  },
}))

const AuthLayout = ({ route }: RouteConfigComponentProps) => {
  const classes = useStyles()

  return (
    <>
      <TopBar />
      <main className={classes.content}>
        <Suspense fallback={<LinearProgress />}>
          {route ? renderRoutes(route.routes) : null}
        </Suspense>
        <Footer />
      </main>
    </>
  )
}

export default AuthLayout
