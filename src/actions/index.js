// Coloque aqui suas actions
export const SAVE_EMAIL = 'SAVE_EMAIL';
export const GET_CURRENCIES = 'GET_CURRENCIES';
export const SAVE_EXPENSES = 'SAVE_EXPENSES';
export const DISPATCH_CURRENCIES = 'DISPATCH-CURRENCIES';

export const saveEmail = (email) => ({ type: SAVE_EMAIL, email });

export const getCurrencies = (payload) => ({ type: GET_CURRENCIES, payload });

export const dispatchCurrencies = (payload) => ({ type: DISPATCH_CURRENCIES, payload });

export const saveExpenses = (payload) => ({ type: SAVE_EXPENSES, payload });
