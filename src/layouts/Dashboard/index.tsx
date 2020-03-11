import React, { Suspense, useEffect, useState, useRef } from 'react'
import { renderRoutes, RouteConfigComponentProps } from 'react-router-config'
import { makeStyles } from '@material-ui/core/styles'
import { LinearProgress } from '@material-ui/core'
import { searchAdminDateList } from 'reducers/companyReducer'
import TopBar from './TopBar'
import { useDispatch, useSelector } from 'react-redux'
import { getUserInfo } from 'reducers/globalMenuReducer'
import NavBar from './NavBar'
import { RootState } from 'reducers'
import ScrollReset from 'components/ScrollReset'
import { Footer } from 'components'
import { searchSuggestList } from 'reducers/operationLogReducer'

const useStyles = makeStyles(theme => ({
  root: {
    height: '100%',
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    overflow: 'hidden',
    // minWidth: 960,
  },
  topBar: {
    zIndex: 2,
    position: 'relative',
  },
  navBar: {
    zIndex: 3,
    width: 256,
    minWidth: 256,
    flex: '0 0 auto',
  },
  container: {
    display: 'flex',
    flex: '1 1 auto',
    overflow: 'hidden',
  },
  content: {
    overflowY: 'auto',
    height: '100%',
    flex: '1 1 auto',
    paddingLeft: theme.spacing(2),
    paddingRight: theme.spacing(2),
    display: 'flex',
    flexDirection: 'column',
  },
  mainSection: {
    flex: '1 0 auto',
  },
}))

const DashboardLayout = ({ route }: RouteConfigComponentProps) => {
  const classes = useStyles()
  const [openNavBarMobile, setOpenNavBarMobile] = useState(false)
  const userInfo = useSelector((state: RootState) => state.globalMenu)
  const containerRef = useRef(null)

  const handleNavBarMobileOpen = () => {
    setOpenNavBarMobile(true)
  }

  const handleNavBarMobileClose = () => {
    setOpenNavBarMobile(false)
  }

  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(getUserInfo())
    dispatch(searchAdminDateList())
    dispatch(searchSuggestList())
  }, [dispatch])

  return (
    <div className={classes.root}>
      <TopBar
        className={classes.topBar}
        onOpenNavBarMobile={handleNavBarMobileOpen}
      />
      <div className={classes.container}>
        <NavBar
          className={classes.navBar}
          onMobileClose={handleNavBarMobileClose}
          openMobile={openNavBarMobile}
          userInfo={userInfo}
        />
        <main className={classes.content} ref={containerRef}>
          <div className={classes.mainSection}>
            <Suspense fallback={<LinearProgress />}>
              <ScrollReset ref={containerRef} />
              {route ? renderRoutes(route.routes) : null}
            </Suspense>
          </div>
          <Footer />
        </main>
      </div>
    </div>
  )
}

export default DashboardLayout
