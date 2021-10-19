// Coloque aqui suas actions
export const SAVE_USER_DATA = 'SAVE_USER_DATA';
const URL = 'https://economia.awesomeapi.com.br/json/all';
export const API_EXPENSES = 'API_EXPENSES';
export const SALVAR_DESPESA = 'SALVAR_DESPESA';

export const saveUserData = (email, password) => ({
  type: SAVE_USER_DATA,
  email,
  password,
});

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
