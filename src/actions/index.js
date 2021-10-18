// Coloque aqui suas actions
export const CURRENCIES = 'CURRENCIES';
export const EXPENSES = 'EXPENSES';
export const EMAIL = 'EMAIL';

export const currencies = (payload) => ({ type: CURRENCIES, payload });
export const expenses = (payload) => ({ type: EXPENSES, payload });
export const email = (payload) => ({ type: EMAIL, payload });
