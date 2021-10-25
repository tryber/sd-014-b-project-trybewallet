// Coloque aqui suas actions
export const USER = 'USER';
export const WALLET__EXPENSES = 'WALLET__EXPENSES';
export const WALLET__CURRENCIES = 'WALLET__CURRENCIES';
export const WALLET__ID = 'WALLET__ID';

export const userAction = (email) => ({
  type: USER,
  payload: email,
});

export const walletExpensesAction = (expenses) => ({
  type: WALLET__EXPENSES,
  payload: expenses,
});

export const walletCurrenciesAction = (currencies) => ({
  type: WALLET__CURRENCIES,
  payload: currencies,
});

export const walletIdAction = (currencies) => ({
  type: WALLET__ID,
  payload: currencies,
});
