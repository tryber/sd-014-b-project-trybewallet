// Coloque aqui suas actions
// ref:https://github.com/tryber/sd-014-b-project-trybewallet/pull/106/commits/38b0703ddbeea742823f5ddc503a4daf020d83c8
import fetchCurrencyAPI from '../services/currencyApi';

export const SUBMIT_LOGIN = 'SUBMIT_LOGIN';
export const GET_COINS = 'GET_COINS';
export const ADD_EXPENSES = 'ADD_EXPENSES';
export const REQUEST_CURRENCIES = 'REQUEST_CURRENCIES';
export const GET_CURRENCIES = 'GET_CURRENCIES';
export const REMOVE_EXPENSES = 'REMOVE_EXPENSES';

export const submitLogin = (email) => ({ type: SUBMIT_LOGIN, email });

export const getCoins = (payload) => ({ type: GET_COINS, payload });

export const addExpenses = (payload) => ({ type: ADD_EXPENSES, payload });

export const requestCurrencies = () => ({ type: REQUEST_CURRENCIES });

export const getCurrencies = (payload) => ({ type: GET_CURRENCIES, payload });

export const fetchCurrencies = () => (dispatch) => {
  dispatch(requestCurrencies());

  fetchCurrencyAPI()
    .then((response) => dispatch(getCurrencies(response)));
};

export const removeExpenses = (payload) => ({ type: REMOVE_EXPENSES, payload });
