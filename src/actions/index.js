export const SAVE_USER_DATA = 'SAVE_USER_DATA';
export const SUBMIT_CURRENCIES = 'SUBMIT_CURRENCIES';
export const EXPENSES_API = 'EXPENSES_API';

export const user = (payload) => ({
  type: SAVE_USER_DATA,
  payload,
});

export const submitCurrencies = (payload) => ({
  type: SUBMIT_CURRENCIES,
  payload,
});

export const apiExpenses = (payload) => ({
  type: EXPENSES_API,
  payload,
});

const requestApiCurrencies = async () => {
  const URL = 'https://economia.awesomeapi.com.br/json/all';
  const result = await fetch(URL);
  const data = await result.json();
  delete data.USDT;
  return data;
};

export const currenciResult = () => async (dispatch) => {
  const resultDataAPI = await requestApiCurrencies();
  dispatch(submitCurrencies(resultDataAPI));
};

export const resultAPI = (expense) => async (dispatch) => {
  const resultDataAPI = await requestApiCurrencies();
  dispatch(apiExpenses({
    ...expense,
    exchangeRates: resultDataAPI,
  }));
};
