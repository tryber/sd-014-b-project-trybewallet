const SET_USER_VALUE = 'SET_USER_VALUE';
const SET_WALLET_VALUE = 'SET_WALLET_VALUE';

const setUserValue = (payload) => (
  {
    type: SET_USER_VALUE, payload,
  });

const setWalletValue = (payload) => (
  {
    type: SET_WALLET_VALUE, payload,
  });

const setWalletExpenses = (payload) => (
  {
    type: 'SET_WALLET_EXPENSES', payload,
  });

export default {
  SET_USER_VALUE, setUserValue, SET_WALLET_VALUE, setWalletValue, setWalletExpenses };
