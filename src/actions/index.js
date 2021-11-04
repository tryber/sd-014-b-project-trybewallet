export const GET_LOGIN = 'GET_LOGIN';
export const GET_CURRENCIES = 'CURRENCIES';

export const loginAction = (payload) => ({ type: GET_LOGIN, payload });

export const getCurrencies = (data) => ({ type: GET_CURRENCIES, payload: data });

export const fetchCurrencies = () => async (dispatch) => {
  const response = await fetch('https://economia.awesomeapi.com.br/json/all');
  const data = await response.json();
  return dispatch(getCurrencies(data));
};
