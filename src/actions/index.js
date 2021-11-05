export const SEND_ACESS = 'SEND_ACESS_FORM';
export const SEND_RATES = 'SEND_EXCHANGE_RATES';
export const DELETE_EXPENSE = 'DELETE_EXPENSE';
export const SEND_CURRENCIES = 'SEND_CURRENCIES';
export const EDIT_EXPENSE = 'EDIT_EXPENSE';
export const ADD_EXPENSE_CHANGES = 'ADD_EXPENSE_CHANGES';

export const sendAcess = (email) => ({
  type: SEND_ACESS, email,
});

export const exchangeRating = (rates) => ({
  type: SEND_RATES, rates,
});

export const deleteExpenses = (id) => ({
  type: DELETE_EXPENSE, id,
});

export const editExpenses = (id) => ({
  type: EDIT_EXPENSE, id,
});

export const addExpenseChanges = (expense) => ({
  type: ADD_EXPENSE_CHANGES, expense,
});

export const setCurrencies = (currencies) => ({
  type: SEND_CURRENCIES, currencies,
});
