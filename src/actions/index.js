export const SAVE_USER = 'SAVE_USER';
export const ADD_EXPENSE = 'ADD_EXPENSE';

export const saveUser = (payload) => ({
  type: SAVE_USER,
  payload,
});

export const addExpense = (payload) => ({
  type: ADD_EXPENSE,
  payload,
});
