import React, { useEffect } from 'react'
import { renderRoutes } from 'react-router-config'

import ErrorBoundary from 'pages/ErrorBoundary'
import { publicRouteList, privateRouteList } from 'routes'
import { useSelector, useDispatch } from 'react-redux'
import { RootState } from 'reducers'
import {
  Snackbar,
  IconButton,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
  DialogActions,
  Button,
  AppBar,
  Typography,
  Toolbar,
} from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import CloseIcon from '@material-ui/icons/Close'
import { closeMessage } from 'reducers/messageReducer'
import { sendError } from 'reducers/errorReducer'
const useStyles = makeStyles({
  modal: {
    '& .MuiDialog-paper': {
      minWidth: '400px',
    },
  },
})

const App: React.FC = () => {
  const classes = useStyles()
  const { token } = useSelector((state: RootState) => state.login)
  const { permissions } = useSelector((state: RootState) => state.globalMenu)
  const { message, type } = useSelector((state: RootState) => state.snackbar)
  const { errorMessage, errorStack } = useSelector(
    (state: RootState) => state.error
  )

  const snackbarOpen = Boolean(message) && type === 'snackbar'
  const modalOpen = Boolean(message) && type === 'modal'
  const fullpageOpen = Boolean(message) && type === 'fullpage'

  const dispatch = useDispatch()
  const handleClose = () => {
    dispatch(closeMessage())
  }

  useEffect(() => {
    if (errorMessage || errorStack) {
      dispatch(sendError({ errorMessage, errorStack }))
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <ErrorBoundary>
      {renderRoutes(token ? privateRouteList(permissions) : publicRouteList)}

      <Snackbar
        open={snackbarOpen}
        autoHideDuration={6000}
        onClose={handleClose}
        message={<span>{message}</span>}
        action={
          <IconButton color='inherit' onClick={handleClose}>
            <CloseIcon />
          </IconButton>
        }
      />

      <Dialog open={modalOpen} onClose={handleClose} className={classes.modal}>
        <DialogTitle>エラー</DialogTitle>
        <DialogContent>
          <DialogContentText>{message}</DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>閉じる</Button>
        </DialogActions>
      </Dialog>

      <Dialog fullScreen open={fullpageOpen} onClose={handleClose}>
        <AppBar position='relative'>
          <Toolbar>
            <IconButton
              edge='start'
              color='inherit'
              onClick={handleClose}
              aria-label='close'>
              <CloseIcon />
            </IconButton>
            <Typography variant='h6'>エラー</Typography>
          </Toolbar>
        </AppBar>
        <DialogContent>
          <DialogContentText>{message}</DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>閉じる</Button>
        </DialogActions>
      </Dialog>
    </ErrorBoundary>
  )
}

export default App
