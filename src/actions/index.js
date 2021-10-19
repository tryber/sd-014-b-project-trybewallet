// Coloque aqui suas actions
import getAllCurrencies from '../services/currencyAPI';

export const GET_CURRENCY = 'GET_CURRENCY';
export const CODE_CURRENCY = 'CODE_CURRENCY';
export const USER_EMAIL = 'USER_EMAIL';
export const ADD_EXPENSES = 'ADD_EXPENSES';
export const EDIT_EXPENSE = 'EDIT_EXPENSE';
export const SAVE_EDIT_EXPENSE = 'SAVE_EDIT_EXPENSE';
export const EXCLUDE_EXPENSES = 'EXCLUDE_EXPENSES';
export const LOADING = 'LOADING';

export const getCurrency = (payload) => ({
  type: GET_CURRENCY,
  payload,
});

export const userEmail = (payload) => ({
  type: USER_EMAIL,
  payload,
});

export const addExpenses = (payload) => ({
  type: ADD_EXPENSES,
  payload,
});

export const editExpense = (payload) => ({
  type: EDIT_EXPENSE,
  payload,
});

export const saveEditExpense = (payload) => ({
  type: SAVE_EDIT_EXPENSE,
  payload,
});

export const excludeExpenses = (payload) => ({
  type: EXCLUDE_EXPENSES,
  payload,
});

export const isLoading = () => ({ type: LOADING });

export const getCodeCurrency = (payload) => ({
  type: CODE_CURRENCY,
  payload,
});

export const getCurrencies = () => async (dispatch) => {
  const response = await getAllCurrencies();
  // dica delete dada pelo Rodrigo Augusto.
  // o delete é um operador que remove uma propriedade de um objeto.
  delete response.USDT;
  const payload = { ...response };
  dispatch(getCurrency(payload));
  dispatch(getCodeCurrency(Object.keys(payload)));
  dispatch(isLoading());
};
