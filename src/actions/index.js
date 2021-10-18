export const ADD_USER_EMAIL = 'ADD_USER_EMAIL';
export const ADD_EXPENSES = 'ADD_EXPENSES';
export const ADD_CURRENCIES = 'ADD_CURRENCIES';
export const UPDATE_TOTAL_EXPENSES = 'UPDATE_TOTAL_EXPENSES';

export const addUserEmail = (payload) => ({ type: ADD_USER_EMAIL, payload });

export const addExpenses = (payload) => ({ type: ADD_EXPENSES, payload });

export const addCurrencies = (payload) => ({ type: ADD_CURRENCIES, payload });

export const updateTotalExpenses = (payload) => (
  { type: UPDATE_TOTAL_EXPENSES, payload }
);
