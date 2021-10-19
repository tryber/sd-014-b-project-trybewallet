// Coloque aqui suas actions
export const LOGIN = 'LOGIN';
export const ADD_EXPENSE = 'ADD_EXPENSE';
export const FETCH_API = 'FETCH_API';
export const LIST_CURRENCY = 'LIST_CURRENCY';

export const sendLogin = (userinfo) => ({
  type: LOGIN,
  userinfo,
});

export const addExpense = (payload) => ({
  type: ADD_EXPENSE,
  payload,
});

export const fetchApi = () => ({
  type: FETCH_API,
});

export const listCurrency = (currencyList) => ({
  type: LIST_CURRENCY,
  payload: currencyList,
});

export const fecthCurrencies = () => async (dispatch) => {
  const response = await fetch('https://economia.awesomeapi.com.br/json/all');
  const result = await response.json();
  delete result.USDT;
  dispatch(listCurrency(result));
};
