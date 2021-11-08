export const USER_ACTION = 'USER_ACTION';
export const CURRENCIES_ACTION = 'CURRENCIES_ACTION';
export const EXPENSES_ACTION = 'EXPENSES_ACTION';

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
