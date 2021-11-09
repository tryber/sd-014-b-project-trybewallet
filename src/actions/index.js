// Coloque aqui suas actions
export const SEND_LOGIN = 'SEND_INFO_FORM';
export const SEND_CURRENCIES = 'SEND_CURRENCIES';
export const ADD_EXPENSES = 'ADD_EXPENSES';
export const EDIT_EXPENSE = 'EDIT_EXPENSE';
export const DELETE_EXPENSE = 'DELETE_EXPENSE';
export const SEND_RATES = 'SEND_EXCHANGE_RATES';

export const sendLogin = (email) => ({
  type: SEND_LOGIN, email,
});

export const sendCurrencies = (currencies) => ({
  type: SEND_CURRENCIES, currencies,
});

export const addExpense = (expense) => ({
  type: ADD_EXPENSES, expense,
});

export const editExpenses = (id) => ({
  type: EDIT_EXPENSE, id,
});

export const deleteExpenses = (id) => ({
  type: DELETE_EXPENSE, id,
});

export const exchangeRating = (rates) => ({
  type: SEND_RATES, rates,
});
