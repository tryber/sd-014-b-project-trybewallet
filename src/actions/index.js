export const SET_USER_VALUE = 'SET_USER_VALUE';
export const SET_WALLET_VALUE = 'SET_WALLET_VALUE';

export const setUserValue = (payload) => (
  {
    type: SET_USER_VALUE, payload,
  });

export const setWalletValue = (payload) => (
  {
    type: SET_WALLET_VALUE, payload,
  });

export const setWalletExpenses = (payload) => (
  {
    type: 'SET_WALLET_EXPENSES', payload,
  });
