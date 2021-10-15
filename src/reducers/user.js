import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  email: '',
};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    inputEmail: (state, action) => {
      state.email = action.payload;
    },
  },
});

export const { inputEmail } = userSlice.actions;

export default userSlice.reducer;
