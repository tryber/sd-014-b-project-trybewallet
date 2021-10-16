// Coloque aqui suas actions
export const LOGIN = 'LOGIN';
export const EXPENSE = 'EXPENSE';
export const REQUEST_CURRENCY = 'REQUEST_CURRENCY';
export const GET_CURRENCY = 'GET_CURRENCY';

export const logUser = (payload) => ({
  type: LOGIN,
  payload,
});

export const addExpense = (payload) => ({
  type: EXPENSE,
  payload,
});

export const requestAPI = () => ({
  type: REQUEST_CURRENCY,
});

export const getCurrency = (payload) => ({
  type: GET_CURRENCY,
  payload,
});

export function fetchAPI() {
  return (dispatch) => {
    dispatch(requestAPI());
    return fetch('https://economia.awesomeapi.com.br/json/all')
      .then((response) => response.json())
      .then((data) => dispatch(getCurrency(data)));
  };
}
