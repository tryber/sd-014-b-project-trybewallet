export const SAVE_USER_EMAIL = 'SAVE_USER_EMAIL';
export const GET_CURRENCIES = 'GET_CURRENCIES';
export const REQUEST_ERROR = 'REQUEST_ERROR';

export const saveUserEmail = (payload) => ({
  type: SAVE_USER_EMAIL,
  payload,
});

export const getCurrencies = (currencies) => ({
  type: GET_CURRENCIES,
  currencies,
});

export const requestError = (error) => ({
  type: REQUEST_ERROR,
  error,
});

export const thunkCurrencies = () => async (dispatch) => {
  try {
    const response = await fetch('https://economia.awesomeapi.com.br/json/all');
    const currencies = await response.json();
    dispatch(getCurrencies(currencies));
  } catch (error) {
    dispatch(requestError(error));
  }
};
