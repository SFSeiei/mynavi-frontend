import { createSlice, PayloadAction } from 'redux-starter-kit';
import {
  getErrorFromStorage,
  removeErrorFromStorage,
  setErrorFromStorage,
} from 'utils/error';

const initialState = () => ({ ...getErrorFromStorage() });

type ActionType = PayloadAction<ReturnType<typeof initialState>>;

const errorSlice = createSlice({
  slice: 'error',
  initialState: initialState(),
  reducers: {
    setError: (state, action: ActionType) => {
      setErrorFromStorage(action.payload);
      return action.payload;
    },
    sendError: (state, action: ActionType) => state,
    removeError: () => {
      removeErrorFromStorage();
      return {
        errorMessage: null,
        errorStack: null,
      };
    },
  },
});

const { actions, reducer } = errorSlice;

export const { setError, sendError, removeError } = actions;
export default reducer;
