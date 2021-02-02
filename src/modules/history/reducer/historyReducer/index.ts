import { createSlice } from '@reduxjs/toolkit';
import { ErrorStateCodeEnum } from 'Stores/common/types/error';
import { fetchHistoryData } from './actions';
import { initHistoryState } from './init';
import { HISTORY } from './types';
export const historySlice = createSlice({
  name: HISTORY,
  initialState: initHistoryState,
  reducers: {
    init(state) {
      return { ...state, ...initHistoryState };
    },
    setData: (state, { payload }) => {
      state.data = payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchHistoryData.rejected, (state) => {
      state.ready = false;
      state = {
        ...state,
        error: {
          code: ErrorStateCodeEnum.ServerInternalError,
          msg: 'api error',
        },
      };
    });
    builder.addCase(fetchHistoryData.pending, (state) => {
      state.ready = false;
      state.error = undefined;
    });
    builder.addCase(fetchHistoryData.fulfilled, (state, action: any) => {
      state.ready = true;
      state.error = undefined;
      state.data = action.payload.data;
      historySlice.caseReducers.setData(state, action);
    });
  },
});

export default historySlice.reducer;

export const historyActions = historySlice.actions;
