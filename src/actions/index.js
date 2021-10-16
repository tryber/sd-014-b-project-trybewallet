async function fetchApi(URL) {
  const response = await fetch(URL);
  return response.json();
}

export const LOGIN_ACT = (value) => ({ type: 'LOGIN', value });

const GET_CURRENCIES = (value) => ({ type: 'GET_CURRENCIES', value });

const CURRENCY_LOADED = () => ({ type: 'CURRENCY_LOADED' });

const API_URL = 'https://economia.awesomeapi.com.br/json/all';

export function LOAD_CURRENCIES() {
  return async (dispatch) => {
    const result = await fetchApi(API_URL);
    const values = Object.keys(result).filter((item) => item !== 'USDT');
    dispatch(GET_CURRENCIES(values));
    return dispatch(CURRENCY_LOADED());
  };
}
