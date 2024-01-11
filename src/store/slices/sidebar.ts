import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface ISidebar {
  show: boolean;
}

const initialState: ISidebar = {
  show: true,
};

const sidebarSlice = createSlice({
  name: 'sidebarshow',
  initialState,
  reducers: {
    handleSidebarShow: (state, action: PayloadAction<boolean>) => {
      state.show = action.payload;
    },
  },
});

export const { handleSidebarShow } = sidebarSlice.actions;

export default sidebarSlice.reducer;
