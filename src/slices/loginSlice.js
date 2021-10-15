import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  email: '',
  pasword: '',
  isEmailValid: false,
  isPasswordValid: false,
};

export const loginSlice = createSlice({
  name: 'login',
  initialState,
  reducers: {
    getEmail: (state, action) => {
      state.email = action.payload;
      state.isEmailValid = action.payload === 'alguem@alguem.com';
    },
    getPassword: (state, action) => {
      const MIN_LENGTH = 6;
      state.pasword = action.payload;
      state.isPasswordValid = action.payload.length >= MIN_LENGTH;
    },
  },
});

export const { getEmail, getPassword } = loginSlice.actions;

export default loginSlice.reducer;
