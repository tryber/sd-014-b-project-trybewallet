export const SET_EMAIL = 'SET_EMAIL';
export const REQUEST_CURRENCY = 'REQUEST_CURRENCY';
export const ERROR_CURRENCY = 'ERROR_CURRENCY';
export const GET_EXPENSES = 'GET_EXPENSES';
export const ERROR_EXPENSES = 'ERROR_EXPENSES';

export const actionChangeEmail = (payload) => ({ type: SET_EMAIL, payload });

export const requestCurrencies = (state) => ({ type: REQUEST_CURRENCY, state });

export const recieveCurrenciesError = () => ({
  type: ERROR_CURRENCY,
});

export const getExpenses = (state) => ({
  type: GET_EXPENSES,
  state,
});

export const expensesError = () => ({
  type: ERROR_EXPENSES,
});

export const getCurrency = (state) => async (dispatch) => {
  const respJson = await fetch('https://economia.awesomeapi.com.br/json/all');
  if (!respJson.ok) return dispatch(expensesError);
  const currenciesData = await respJson.json();
  const total = (+state.value * +currenciesData[state.currency].ask);
  dispatch(getExpenses(
    { expense: { ...state, exchangeRates: currenciesData }, total },
  ));
};

export const getApi = () => async (dispatch) => {
  try {
    const endpoint = await fetch('https://economia.awesomeapi.com.br/json/all');
    const res = await endpoint.json();
    const data = Object.keys(res).filter((currency) => currency !== 'USDT');
    dispatch(requestCurrencies(data));
  } catch (_err) {
    return dispatch(recieveCurrenciesError());
  }
};
