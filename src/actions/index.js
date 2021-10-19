// Coloque aqui suas actions
const LOGIN = 'LOGIN';
const ADD_EXPENSES = 'ADD_EXPENSES';
const CURRENCIES = 'CURRENCIES';

export const doLogin = (value = '') => ({ type: LOGIN, value });
export const addExpenses = (value) => ({ type: ADD_EXPENSES, value });
export const currencies = (value) => ({ type: CURRENCIES, value });
