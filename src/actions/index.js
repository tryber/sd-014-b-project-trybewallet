// Coloque aqui suas actions
export const LOGIN = 'LOGIN';
export const CURRENCIES = 'CURRENCIES';
export const EXPENSES = 'EXPENSES';

export const login = (enter) => (
  {
    type: LOGIN, enter,
  });

export const addCurrency = (enter) => (
  {
    type: CURRENCIES, enter,
  });

export const expense = (enter) => (
  {
    type: EXPENSES, enter,
  });
