// USER INFO
export const USER_EMAIL = 'USER_EMAIL';

export const saveUserEmail = (email) => ({
  type: USER_EMAIL,
  payload: email,
});

// WALLET INFORMATION
export const HANDLE_EXPENSES = 'HANDLE_EXPENSES';

export const handleExpenses = (expenses) => ({
  type: HANDLE_EXPENSES,
  payload: expenses,
});

export const SAVE_CURRENCIES = 'SAVE_CURRENCIES';

export const getCurrencies = (currencies) => ({
  type: SAVE_CURRENCIES,
  payload: currencies,
});
