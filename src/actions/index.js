// Coloque aqui suas actions

export const SEND_LOGIN = 'SEND_PERSONAL_FORM';
export const SEND_RATES = 'SEND_EXCHANGE_RATES';
export const DELETE_EXPENSE = 'DELETE_EXPENSE';
export const SEND_CURRENCIES = 'SEND_CURRENCIES';
export const EDIT_EXPENSE = 'EDIT_EXPENSE';
export const ADD_EDIT_EXPENSE = 'ADD_EDIT_EXPENSE';

export const sendLogin = (email) => ({
  type: SEND_LOGIN, email,
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

export const addEditedExpense = (expense) => ({
  type: ADD_EDIT_EXPENSE, expense,
});

export const setCurrencies = (currencies) => ({
  type: SEND_CURRENCIES, currencies,
});
