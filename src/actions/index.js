export const LOGIN = 'LOGIN';
export const GET_CURRENCIES = 'GET_CURRENCIES';
export const REQUEST_API = 'REQUEST_API';
export const ADD_EXPENSE = 'ADD_EXPENSE';
export const SUBMIT_USER = 'SUBMIT_USER';

export const submitUser = (payload) => ({
  type: SUBMIT_USER,
  payload,
});

export const loginAction = (payload) => ({
  type: LOGIN,
  payload,
});

export const requestApi = () => ({
  type: REQUEST_API,
});

export const getCurrencies = (payload) => ({
  type: GET_CURRENCIES,
  payload,
});

export const fetchCurrencies = () => async (dispatch) => {
  const response = await fetch('https://economia.awesomeapi.com.br/json/all');
  const result = await response.json();
  delete result.USDT;
  dispatch(getCurrencies(result));
};

export const addExpense = (payload) => ({
  type: ADD_EXPENSE,
  payload,
});
