import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  currencies: [],
  expenses: [],
};

export const walletSlice = createSlice({
  name: 'wallet',
  initialState,
  reducers: {
    setCurrencies: (state, action) => {
      state.currencies = action.payload;
    },
  },
});

export const { setCureencies } = walletSlice.actions;

export default walletSlice.reducer;
