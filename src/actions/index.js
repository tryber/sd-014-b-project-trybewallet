export const SET_LOGIN_VALUE = 'SET_LOGIN_VALUE';
export const SET_WALLET_VALUE = 'SET_WALLET_VALUE';
export const API_ERROR = 'API_ERROR';
export const SET_WALLET_EXPENSES = 'SET_WALLET_EXPENSES';
export const ADD_EXPENSE_BUTTON = 'ADD_EXPENSE_BUTTON';

export const setLoginValue = (payload) => ({
  type: SET_LOGIN_VALUE,
  email: payload.email,
});

export const setWalletValue = (payload) => ({
  type: SET_WALLET_VALUE,
  currencies: payload,
});

export const setWalletExpenses = (payload) => ({
  type: SET_WALLET_EXPENSES,
  Object: payload,
});

export const apiError = (error) => ({
  type: API_ERROR,
  error,
});

export const addExpenseButton = (expenses) => ({
  type: ADD_EXPENSE_BUTTON,
  expenses,
});

export function fetchApi() {
  return async (dispatch) => {
    try {
      const response = await fetch('https://economia.awesomeapi.com.br/json/all');
      const data = await response.json();
      return dispatch(setWalletValue(data));
    } catch (error) {
      dispatch(apiError(error));
    }
  };
}
