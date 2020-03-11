import { createSlice, PayloadAction } from 'redux-starter-kit'
import { getToken, setToken, removeToken } from 'utils/auth'
import { redirect } from 'common/businessUtil'

const initialState = () => ({
  name: '',
  loginId: '',
  companyId: '',
  recruitmentManagementDivision: '',
  permissions: [] as string[],
  token: getToken(),
})

const userSlice = createSlice({
  slice: 'user',
  initialState: initialState(),
  reducers: {
    login: (state, _: PayloadAction<{ loginId: string; password: string }>) =>
      state,
    loginSuccess: (state, action: PayloadAction<{ token: string }>) => {
      state.token = action.payload.token
      setToken(action.payload.token)
    },
    getUserInfo: state => state,
    setUserInfo: (
      state,
      action: PayloadAction<{
        loginId: string
        companyId: string
        recruitmentManagementDivision: string
        name: string
        permissions: string[]
      }>
    ) => ({
      ...state,
      ...action.payload,
    }),
    signout: state => state,
    signoutSuccess: () => {
      removeToken()
      return initialState()
    },
    updatePassword: (
      state,
      action: PayloadAction<{
        loginId: string
        oldPassword: string
        newPassword: string
      }>
    ) => state,
    proxyLogin: state => {
      redirect()
      return state
    },
  },
})

const { actions, reducer } = userSlice

export const {
  login,
  loginSuccess,
  signout,
  signoutSuccess,
  getUserInfo,
  setUserInfo,
  updatePassword,
  proxyLogin
} = actions
export default reducer
