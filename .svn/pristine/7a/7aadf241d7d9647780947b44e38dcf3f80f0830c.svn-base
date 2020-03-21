import React from 'react'
import { Button, Typography, useTheme, useMediaQuery } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'

import { Page } from 'components'
import { sendError } from 'reducers/errorReducer'
import { replaceToOrigin } from 'utils/misc'
import { getErrorFromStorage } from 'utils/error'
import { connect } from 'react-redux'

const useStyles = makeStyles(theme => ({
  root: {
    padding: theme.spacing(3, 25),
    paddingTop: '10vh',
    display: 'flex',
    flexDirection: 'column',
    alignContent: 'center',
  },
  subtitle: {
    marginTop: theme.spacing(2),
  },
  buttonContainer: {
    marginTop: theme.spacing(6),
    display: 'flex',
    justifyContent: 'center',
  },
}))

export const Error500 = () => {
  const classes = useStyles()
  const theme = useTheme()
  const mobileDevice = useMediaQuery(theme.breakpoints.down('sm'))

  const handleClick = () => {
    replaceToOrigin()
  }

  return (
    <Page className={classes.root} title='Error 500'>
      <Typography align='center' variant={mobileDevice ? 'h4' : 'h1'}>
        技術的な問題が発生しています。
      </Typography>
      <Typography
        align='center'
        variant='subtitle2'
        className={classes.subtitle}>
        ご迷惑をお掛けしております。
      </Typography>
      <div className={classes.buttonContainer}>
        <Button color='primary' variant='outlined' onClick={handleClick}>
          トップページへ
        </Button>
      </div>
    </Page>
  )
}

interface Props {
  sendError: (error: ReturnType<typeof getErrorFromStorage>) => void
}

interface State {
  hasError: boolean
}

class ErrorBoundary extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props)
    this.state = { hasError: false }
  }

  componentDidCatch(error: any, errorInfo: any) {
    this.setState({ hasError: true })
    this.props.sendError({
      errorMessage: error.toString(),
      errorStack: errorInfo.componentStack,
    })
  }

  render() {
    const { hasError } = this.state

    if (hasError) {
      return <Error500 />
    }

    return this.props.children
  }
}

const mapDispatchToProps = {
  sendError,
}

export default connect(
  null,
  mapDispatchToProps
)(ErrorBoundary)
