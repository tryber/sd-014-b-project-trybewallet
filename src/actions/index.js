const LOGIN = 'LOGIN';

export const user = (payload) => ({
  type: LOGIN,
  payload,
});

export const addExpense = (value) => ({ type: 'EXPENSE', value });
export const editExpense = (value) => ({ type: 'EDIT', value });
export const removeExpense = (value) => ({ type: 'REMOVE', value });
