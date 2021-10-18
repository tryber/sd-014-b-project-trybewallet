// Coloque aqui suas actions
export const CURRENCIES = 'CURRENCIES';
export const EXPENSES = 'EXPENSES';
export const EMAIL = 'EMAIL';
export const REQUEST_CURRENCIES = 'REQUEST_COINS';
export const RECEIVE_CURRENCIES = 'GET_CURRENCIES';

export const requestCurrencies = () => ({ type: REQUEST_CURRENCIES });

export const receiveCurrencies = (payload) => ({ type: RECEIVE_CURRENCIES, payload });

export const expenses = (payload) => ({ type: EXPENSES, payload });

export const getEmail = (payload) => ({ type: EMAIL, payload });

export function fetchCurrencies() {
  return (dispatch) => {
    dispatch(requestCurrencies());
    return fetch('https://economia.awesomeapi.com.br/json/all')
      .then((response) => response.json())
      .then((currencies) => dispatch(receiveCurrencies(currencies)));
  };
}
