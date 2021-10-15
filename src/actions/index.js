// Coloque aqui suas actions
export const LOGIN = 'LOGIN';
export const GET_CURRENCIES = 'GET_CURRENCIES';
export const REQUEST_API = 'REQUEST_API';

export const login = (email) => ({
  type: LOGIN,
  email,
});

export const requestAPI = () => ({ type: REQUEST_API });

export const getCurrencies = (currencies) => ({
  type: GET_CURRENCIES,
  payload: currencies,
});

export function fetchCurrenciesAPI() {
  return async (dispatch) => {
    dispatch(requestAPI());
    const response = await fetch('https://economia.awesomeapi.com.br/json/all');
    const data = await response.json();
    const currencies = Object.keys(data).filter((item) => item !== 'USDT');
    return dispatch(getCurrencies(currencies));
  };
}
