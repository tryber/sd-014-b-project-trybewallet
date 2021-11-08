// Coloque aqui suas actions
import fetchCurrencyAPI from '../services/currencyAPI';

export const SUBMIT_USER_INFO = 'SUBMIT_USER_INFO';
export const GET_CURRENCIES = 'GET_CURRENCIES';
export const REQUEST_CURRENCIES = 'REQUEST_CURRENCIES';
export const ADD_EXPENSES = 'ADD_EXPENSES';
export const REMOVE_EXPENSES = 'REMOVE_EXPENSES';

export const submitUser = (payload) => ({
  type: SUBMIT_USER_INFO,
  payload,
});

export const requestCurrencies = () => ({
  type: REQUEST_CURRENCIES,
});

export const getCurrencies = (payload) => ({
  type: GET_CURRENCIES,
  payload,
});

export const addExpenses = (payload) => ({
  type: ADD_EXPENSES,
  payload,
});

export const fetchCurrencies = () => (dispatch) => {
  dispatch(requestCurrencies());

  fetchCurrencyAPI()
    .then((response) => dispatch(getCurrencies(response)));
};
