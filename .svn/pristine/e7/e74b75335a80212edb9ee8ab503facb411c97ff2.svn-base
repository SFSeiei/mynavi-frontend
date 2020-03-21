import React from 'react'
import { Provider } from 'react-redux'
import { DndProvider } from 'react-dnd'
import Backend from 'react-dnd-html5-backend'
import MomentUtils from '@date-io/moment'
import { MuiPickersUtilsProvider } from '@material-ui/pickers'

import ThemeProvider from './themeProvider'
import RouterProvider from './routerProvider'
import store from 'store'

const AppProvider: React.FC = ({ children }) => (
  <Provider store={store}>
    <ThemeProvider>
      <DndProvider backend={Backend}>
        <MuiPickersUtilsProvider utils={MomentUtils}>
          <RouterProvider>{children}</RouterProvider>
        </MuiPickersUtilsProvider>
      </DndProvider>
    </ThemeProvider>
  </Provider>
)

export default AppProvider