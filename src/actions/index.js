export const USER = 'USER';
export const EXPENSES = 'EXPENSES';
export const REMOVE = 'REMOVE';

export const userAction = (payload) => ({
  type: USER,
  payload,
});

export const expenseAction = (payload) => ({
  type: EXPENSES,
  payload,
});

export const removeExpenseAction = (payload) => ({
  type: REMOVE,
  payload,
});
