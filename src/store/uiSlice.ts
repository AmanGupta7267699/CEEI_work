import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface UIState {
  searchTerm: string;
  sortOrder: 'asc' | 'desc';
}

const initialState: UIState = {
  searchTerm: '',
  sortOrder: 'asc',
};

const uiSlice = createSlice({
  name: 'ui',
  initialState,
  reducers: {
    setSearchTerm(state, action: PayloadAction<string>) {
      state.searchTerm = action.payload;
    },
    setSortOrder(state, action: PayloadAction<'asc' | 'desc'>) {
      state.sortOrder = action.payload;
    },
  },
});

export const { setSearchTerm, setSortOrder } = uiSlice.actions;
export default uiSlice.reducer;
