import { createSlice, PayloadAction } from 'redux-starter-kit'
import { removeToken} from 'utils/auth'
import { replaceToOrigin } from 'utils/misc'
const initialState = () => ({
  //氏名
  userName: '',
  //管理者ID
  managerId: '',
  //権限
  permissions: [] as string[],
})

const globalMenuSlice = createSlice({
  slice: 'globalMenu',
  initialState: initialState(),
  reducers: {
    getUserInfo: state => state,
    setUserInfo: (
      state,
      action: PayloadAction<{
        userName: string
        managerId: string
        permissions: string[]
      }>
    ) => ({
      ...state,
      ...action.payload,
    }),
    signout: state => state,
    signoutSuccess: (state) => {
      removeToken();
      replaceToOrigin();
      return initialState()
    },
  },
})

const { actions, reducer } = globalMenuSlice

export const {
  signout,
  signoutSuccess,
  getUserInfo,
  setUserInfo
} = actions
export default reducer
