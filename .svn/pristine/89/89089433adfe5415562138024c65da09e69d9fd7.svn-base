import { combineReducers } from 'redux-starter-kit'

import messageReducer from './messageReducer'
import accountReducer from './accountReducer'
import applicationReducer from './applicationReducer'
import loginReducer from './loginReducer'
import errorReducer from './errorReducer'
import notificationReducer from './notificationReducer'
import operationLogReducer from './operationLogReducer'
import companyReducer from './companyReducer'
import globalMenuReducer from './globalMenuReducer'

const rootReducer = combineReducers({
  login: loginReducer,
  snackbar: messageReducer,
  account: accountReducer,
  application: applicationReducer,
  error: errorReducer,
  notification: notificationReducer,
  operationLog: operationLogReducer,
  company: companyReducer,
  globalMenu: globalMenuReducer,
});

export type RootState = ReturnType<typeof rootReducer>

export default rootReducer
