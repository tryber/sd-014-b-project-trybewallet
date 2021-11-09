export const STORE_EMAIL = 'STORE_EMAIL';
export const WALLET_INFO = 'WALLET_INFO';
export const ALL_CURRENCIES = 'ALL_CURRENCIES';
export const DELETE_EXPENSE = 'DELETE_EXPENSE';

export const storeEmail = (email) => ({
  type: STORE_EMAIL,
  email,
});

export const walletInfo = (expenses) => ({
  type: WALLET_INFO,
  expenses,
});

export const currenciesInfo = (currencies) => ({
  type: ALL_CURRENCIES,
  currencies,
});

export const deleteExpense = (id) => ({
  type: DELETE_EXPENSE,
  id,
});
