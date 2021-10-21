export const SET_USER_VALUE = 'SET_USER_VALUE';
export const SET_WALLET_VALUE = 'SET_WALLET_VALUE';
export const SET_WALLET_EXPENSES = 'SET_WALLET_EXPENSES';
export const FAILED_REQUEST = 'FAILED_REQUEST';

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
    type: SET_WALLET_EXPENSES, payload,
  });

export const failedRequest = (payload) => ({
  type: FAILED_REQUEST, payload,
});

export function fetchWallet() {
  return async (dispatch) => {
    try {
      const response = await fetch('https://economia.awesomeapi.com.br/json/all');
      const data = await response.json();
      const arrayObjects = Object.keys(data);
      return dispatch(setWalletValue(arrayObjects));
    } catch (error) {
      dispatch(failedRequest(error));
    }
  };
}
