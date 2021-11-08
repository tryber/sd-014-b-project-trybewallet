export const USER_ACTION = 'USER_ACTION';
export const CURRENCIES_ACTION = 'CURRENCIES_ACTION';
export const EXPENSES_ACTION = 'EXPENSES_ACTION';
export const CLEAR_EXPENSE = 'CLEAR_EXPENSE';

export const userAction = (email) => ({
  type: USER_ACTION,
  email,
});

export const currenciesAction = (payload) => ({
  type: CURRENCIES_ACTION,
  payload,
});

export const expensesAction = (payload) => ({
  type: EXPENSES_ACTION,
  payload,
});

export const clearAction = (payload) => ({
  type: CLEAR_EXPENSE,
  payload,
});

export const fetchExpenses = (payload) => async (dispatch) => {
  const rates = await fetch('https://economia.awesomeapi.com.br/json/all').then((response) => response.json());
  dispatch(expensesAction({ ...payload, exchangeRates: rates }));
};
