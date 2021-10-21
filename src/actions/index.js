export const SAVE_EMAIL = 'SAVE_EMAIL';
export const REQUEST_CURRENCIES = 'REQUEST_CURRENCIES';
export const GET_SPENT = 'GET_SPENT';
export const DEL_SPENT = 'DEL_SPENT';

export const saveEmail = (value) => ({ type: SAVE_EMAIL, value });

export const requestCurrencies = (payload) => ({ type: REQUEST_CURRENCIES, payload });

export const getSpent = (stateExpense, dataApi ) => ({ type: GET_SPENT, stateExpense, dataApi });

export const delExpensive = (value) => ({ type: DEL_SPENT, value });

export function fetchApiExchange(state) {
  return (dispatch) => {
    return fetch('https://economia.awesomeapi.com.br/json/all')
    .then((response) => response.json())
      .then((response) => dispatch(getSpent(state, response)))
  }
}

