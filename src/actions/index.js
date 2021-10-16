// Action Types.
export const USER = 'USER';
export const CURRENCIES = 'CURRENCIES';
export const EXPENSES = 'EXPENSES';

// Actions

export const user = (payload) => ({
  type: USER,
  payload,
});

export const currencies = (payload) => ({
  type: CURRENCIES,
  payload,
});

export const expenses = (payload) => ({
  type: EXPENSES,
  payload,
});
