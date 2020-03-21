import { createSlice, PayloadAction } from 'redux-starter-kit'
import { getMessage } from 'common/messageUtil'

const initialState = {
  message: '',
  type: '', // snackbar, modal, fullpage
}

const messageSlice = createSlice({
  slice: 'message',
  initialState,
  reducers: {
    openSnackbar(state, action: PayloadAction<string>) {
      return {
        message: getMessage(action.payload)
          ? getMessage(action.payload)
          : action.payload,
        type: 'snackbar',
      }
    },
    openModal(state, action: PayloadAction<string>) {
      return {
        message: getMessage(action.payload)
          ? getMessage(action.payload)
          : action.payload,
        type: 'modal',
      }
    },
    closeMessage(state) {
      return initialState
    },
  },
})

export const { openSnackbar, openModal, closeMessage } = messageSlice.actions
export default messageSlice.reducer
