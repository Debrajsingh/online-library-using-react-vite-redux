import { createSlice } from '@reduxjs/toolkit';
import { dummyBooks } from '../data';

const bookSlice = createSlice({
  name: 'books',
  initialState: { list: dummyBooks },
  reducers: {
    addBook: (state, action) => {
      state.list.push(action.payload);
    }
  }
});

export const { addBook } = bookSlice.actions;
export default bookSlice.reducer;
