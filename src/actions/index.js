// Coloque aqui suas actions
export const SET_EMAIL = 'SET_EMAIL';

export const RECEIVE_CURRENCIES = 'RECEIVE_CURRENCIES';

export const SET_EXPENSES = 'SET_EXPENSES';

export const setEmail = (payload) => ({ type: SET_EMAIL, payload });

export const receiveCurrencies = (payload) => ({ type: RECEIVE_CURRENCIES, payload });

export const setExpenses = (payload) => ({ type: SET_EXPENSES, payload });

export function fetchCurrenciesAction() {
  return (dispatch) => fetch('https://economia.awesomeapi.com.br/json/all')
    .then((response) => response.json())
    .then((data) => dispatch(receiveCurrencies(data)));
}
