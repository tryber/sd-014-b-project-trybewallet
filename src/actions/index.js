export const SET_LOGIN = 'SET_LOGIN';
export const SET_WALLET = 'SET_WALLET';
export const SET_EXPENSE = 'SET_EXPENSE';
export const GET_CURRENCIES = 'GET_CURRENCIES';
export const FAILED_REQUEST = 'FAILED_REQUEST';
export const API_EXPENSES = 'API_EXPENSES';
const URL = 'https://economia.awesomeapi.com.br/json/all';

export const setLogin = (payload) => (
  {
    type: SET_LOGIN, payload,
  }
);

export const guardarResultadoApi = (data) => ({
  type: 'RESULTADO_API',
  payload: data,
});

export const apiExpenses = (payload) => ({
  type: API_EXPENSES,
  payload,
});

export const requestApi = async () => {
  const response = await fetch(URL);
  const data = await response.json();
  return data;
};

export const resultApiExpenses = (expense) => async (dispatch) => {
  const result = await requestApi();
  delete result.USDT;
  dispatch(apiExpenses({ ...expense, exchangeRates: result }));
};

export const resultApi = () => async (dispatch) => {
  const result = await requestApi();
  delete result.USDT;
  dispatch(guardarResultadoApi(result));
};
