export const SAVE_LOGIN_INFO = 'SAVE_LOGIN_INFO';
export const SAVE_CURRENCIES = 'SAVE_CURRENCIES';
export const SAVE_EXPENSE = 'SAVE_EXPENSE';

export const loginInfoAction = (state) => (
  { type: SAVE_LOGIN_INFO,
    state,
  });

export const currenciesAction = (currencies) => ({
  type: SAVE_CURRENCIES,
  currencies,
});

export const expensesAction = (expense) => ({
  type: SAVE_EXPENSE,
  expense,
});
