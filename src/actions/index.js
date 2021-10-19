const LOGIN = 'LOGIN';
const ADD_EXPENSE = 'ADD_EXPENSE';
const ADD_CURRENCY = 'ADD_CURRENCY';

export const login = (email) => ({ type: LOGIN, email });

export const addExpense = (expense) => ({ type: ADD_EXPENSE, expense });

export const addCurency = (currency) => ({ type: ADD_CURRENCY, currency });
