import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ErrorStateCodeEnum } from 'Stores/common/types/error';
import { fetchTaskData } from './actions';
import { initTaskState } from './init';
import { TASK, TaskData, TaskPresent, TaskStatusEnum } from './types';

export const taskSlice = createSlice({
  name: TASK,
  initialState: initTaskState,
  reducers: {
    init(state) {
      return { ...state, ...initTaskState };
    },
    setStatus(state, action: PayloadAction<{ _id: string; status: TaskStatusEnum }>) {
      const { _id, status } = action.payload;
      const task = state.present.queue.find((el) => el._id === _id);
      state.present.queue[task?._id || ''].status = status;
    },
    setProgress(state, action: PayloadAction<{ _id: string; progress: number }>) {
      const { _id, progress } = action.payload;
      const task = state.present.queue.find((el) => el._id === _id);
      state.present.queue[task?._id || ''].progress = progress;
    },
  },

  extraReducers: (builder) => {
    builder.addCase(fetchTaskData.rejected, (state) => {
      state.ready = false;
      state.error = { code: ErrorStateCodeEnum.ServerInternalError, msg: 'api error' };
    });
    builder.addCase(fetchTaskData.pending, (state) => {
      state.ready = false;
      state.error = undefined;
    });
    builder.addCase(
      fetchTaskData.fulfilled,
      (state, action: PayloadAction<{ data: TaskData[] }>) => {
        const { data } = action.payload;
        state.ready = true;
        state.error = undefined;
        state.data = data;

        const prepareData = data.map((el) => ({
          ...el,
          status: TaskStatusEnum.WAITING,
        })) as TaskPresent[];
        state.present.queue.push(...prepareData);
      },
    );
  },
});

export default taskSlice.reducer;
export const taskActions = taskSlice.actions;
