import fetchCurrencyAPI from '../services/currencyAPI';

export const EMAIL_INPUT = 'EMAIL_INPUT';
export const GET_CURRENCIES = 'GET_CURRENCIES';
export const REQUEST_CURRENCIES = 'REQUEST_CURRENCIES';
export const ADD_EXPENSES = 'ADD_EXPENSES';
export const REMOVE_EXPENSES = 'REMOVE_EXPENSES';

export const emailInput = (payload) => ({
  type: EMAIL_INPUT,
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

export const removeExpenses = (payload) => ({
  type: REMOVE_EXPENSES,
  payload,
});

export const fetchCurrencies = () => (dispatch) => {
  dispatch(requestCurrencies());

  fetchCurrencyAPI()
    .then((response) => dispatch(getCurrencies(response)));
};
