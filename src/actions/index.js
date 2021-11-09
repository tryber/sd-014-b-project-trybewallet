export const GET_EMAIL = 'GET_EMAIL';
export const IS_FETCHING = 'IS_FETCHING';
export const GET_CURRENCIES = 'GET_CURRENCIES';
export const GET_EXPENSES_INFO = 'GET_EXPENSES_INFO';

export const getEmail = (payload) => ({ type: GET_EMAIL, payload });

export const isFetching = (payload) => ({ type: IS_FETCHING, payload });

export const getAllCurrencies = (payload) => ({ type: GET_CURRENCIES, payload });

export const getExpensesInfo = (payload) => ({ type: GET_EXPENSES_INFO, payload });

export const fetchCurrencies = () => async (dispatch) => {
  dispatch(isFetching());
  const response = await fetch('https://economia.awesomeapi.com.br/json/all');
  const currencies = await response.json();
  return dispatch(getAllCurrencies(currencies));
};
