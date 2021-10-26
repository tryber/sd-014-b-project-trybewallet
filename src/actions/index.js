// Coloque aqui suas actions
export const LOGIN = 'LOGIN';
export const GET_CURRENCIES = 'GET_CURRENCIES';
export const REQUEST_ERROR = 'REQUEST_ERROR';
export const ADD_EXPENSE = 'ADD_EXPENSE';
export const REMOVE_EXPENSE = 'REMOVE_EXPENSE';
export const EDIT_EXPENSE = 'EDIT_EXPENSE';
export const UPDATE_EDITED_EXPENSE = 'UPDATE_EDITED_EXPENSE';

export const login = (email) => ({
  type: LOGIN,
  email,
});

export const getCurrencies = (payload) => ({
  type: GET_CURRENCIES,
  payload,
});

export const requestError = (error) => ({
  type: REQUEST_ERROR,
  error,
});

export const addExpense = (payload) => ({
  type: ADD_EXPENSE,
  payload,
});

export const removeExpense = (payload) => ({
  type: REMOVE_EXPENSE,
  payload,
});

export const editExpense = (payload) => ({
  type: EDIT_EXPENSE,
  payload,
});

export const updateExpense = (payload) => ({
  type: UPDATE_EDITED_EXPENSE,
  payload,
});

export const thunkCurrencies = () => async (dispatch) => {
  try {
    const response = await fetch('https://economia.awesomeapi.com.br/json/all');
    const currencies = await response.json();
    dispatch(getCurrencies(currencies));
  } catch (error) {
    dispatch(requestError(error));
  }
};
