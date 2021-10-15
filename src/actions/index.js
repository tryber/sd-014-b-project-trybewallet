// Coloque aqui suas actions
export const CURRENCIES = 'CURRENCIES';
export const EXPENSES = 'EXPENSES';
export const EMAIL = 'EMAIL';

export const currencies = (state) => ({ type: CURRENCIES, state });

export const expenses = (state) => ({ type: EXPENSES, state });

export const email = (state) => ({ type: EMAIL, state });
