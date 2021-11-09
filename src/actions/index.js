// Coloque aqui suas actions
export const SEND_LOGIN = 'SEND_INFO_FORM';
export const SEND_CURRENCIES = 'SEND_CURRENCIES';
export const ADD_EXPENSES = 'ADD_EXPENSES';

export const sendLogin = (email) => ({
  type: SEND_LOGIN, email,
});

export const sendCurrencies = (currencies) => ({
  type: SEND_CURRENCIES, currencies,
});

export const addExpense = (expense) => ({
  type: ADD_EXPENSES, expense,
});
