export const LOGIN = 'LOGIN';
export const ADD_EXPENSE = 'ADD_EXPENSE';

export const user = (payload) => ({
  type: LOGIN,
  payload,
});

export const addExpense = (payload) => ({
  type: ADD_EXPENSE,
  payload,
});
