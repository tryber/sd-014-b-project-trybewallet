// Coloque aqui suas actions
import getDataCurrencies from '../services/currenciesAPI';

export const REQUEST_LOGIN = 'REQUEST_LOGIN';
export const REQUEST_CURRENCIES_API = 'REQUEST_CURRENCIES_API';
export const GET_DATA_CURRENCIES = 'GET_DATA_CURRENCIES';
export const SET_EXPENSES = 'SET_EXPENSES';

export const userEmail = (email) => ({
  type: REQUEST_LOGIN,
  email,
});

export const requestCurrencies = () => ({
  type: REQUEST_CURRENCIES_API,
});

export const getCurrencyData = (currencies) => ({
  type: GET_DATA_CURRENCIES,
  currencies,
});

export const fetchCurrencyData = () => (dispatch) => {
  dispatch(requestCurrencies());
  getDataCurrencies()
    .then((currencies) => {
      dispatch(getCurrencyData(currencies));
    });
};

export const setDataExpenses = (expenses) => ({
  type: SET_EXPENSES,
  expenses,
});
