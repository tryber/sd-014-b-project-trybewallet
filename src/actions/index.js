export const LOGIN = 'LOGIN';
export const GET_CURRENCIES = 'GET_CURRENCIES';
export const REQUEST_API = 'REQUEST_API';

export const actionLogin = (payload) => ({
  type: LOGIN,
  payload,
});

export const requestApi = () => ({
  type: REQUEST_API,
});

export const getCurrencies = (currencies) => ({
  type: GET_CURRENCIES,
  payload: currencies,
});

export const fecthCurrencies = () => async (dispatch) => {
  const response = await fetch('https://economia.awesomeapi.com.br/json/all');
  const result = await response.json();
  delete result.USDT;
  dispatch(getCurrencies(result));
};
