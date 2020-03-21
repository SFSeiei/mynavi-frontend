import React from 'react'
import { ThemeProvider as MuiProvider, makeStyles } from '@material-ui/styles'
import 'react-perfect-scrollbar/dist/css/styles.css'

import theme from 'theme'
import { Loading } from 'components'

const useStyles = makeStyles({
  '@global': {
    '*': {
      boxSizing: 'border-box',
      margin: 0,
      padding: 0,
    },
    html: {
      height: '100%',
      '-webkit-font-smoothing': 'antialiased',
      '-moz-osx-font-smoothing': 'grayscale',
    },
    body: {
      backgroundColor: '#f4f6f8',
      height: '100%',
    },
    a: {
      textDecoration: 'none',
    },
    '#root': {
      height: '100%',
    },
    '.overlay': {
      display: 'none',
    },
    '.loading-indicator .overlay': {
      display: 'block',
    },
  },
})

const ThemeProvider: React.FC = ({ children }) => {
  useStyles()
  return (
    <MuiProvider theme={theme}>
      <Loading className='overlay' />
      {children}
    </MuiProvider>
  )
}

export default ThemeProvider
