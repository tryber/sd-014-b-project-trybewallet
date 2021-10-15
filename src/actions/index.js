export const EMAIL = 'EMAIL';
export const CURRENCIES = 'CURRENCIES';
export const EXPENSES = 'EXPENSES';

export const saveEmail = (payload) => ({ type: EMAIL, payload });
export const getCurrencies = (payload) => ({ type: CURRENCIES, payload });
export const changeExpenses = (payload) => ({ type: EXPENSES, payload });
