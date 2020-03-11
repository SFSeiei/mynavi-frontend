import { createSlice, PayloadAction } from 'redux-starter-kit'
import loginRequestDto from 'types/MAAAS010LoginRequest'
import { getToken,  setToken } from 'utils/auth'
const initialState = () => ({
  //token
  token: getToken(),
})

const loginSlice = createSlice({
  slice: 'login',
  initialState: initialState(),
  reducers: {
    login: (state, _: PayloadAction<loginRequestDto>) =>
      state,
    loginSuccess: (state, action: PayloadAction<{ token: string }>) => {
      state.token = action.payload.token
      setToken(action.payload.token)
    },
  },
})

const { actions, reducer } = loginSlice

export const {
  login,
  loginSuccess
} = actions
export default reducer
