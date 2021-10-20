export const SAVE_LOGIN_INFO = 'SAVE_LOGIN_INFO';
export const SAVE_CURRENCIES = 'SAVE_CURRENCIES';
export const SAVE_EXPENSE = 'SAVE_EXPENSE';
export const DELETE_EXPENSE = 'DELETE_EXPENSE';
export const EDIT_EXPENSE = 'EDIT_EXPENSE';
export const EDITED_EXPENSE = 'EDIT_EXPENSE';

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

export const deleteExpensesAction = (expenses) => ({
  type: DELETE_EXPENSE,
  expenses,
});

export const editExpensesAction = (expense) => ({
  type: EDIT_EXPENSE,
  expense,
});

export const editedExpensesAction = (editedExpenses) => ({
  type: EDITED_EXPENSE,
  editedExpenses,
});
