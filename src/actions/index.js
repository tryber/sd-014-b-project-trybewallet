export const USER = 'USER';
export const EXPENSES = 'EXPENSES';

export const userAction = (payload) => ({
  type: USER,
  payload,
});

export const expenseAction = (payload) => ({
  type: EXPENSES,
  payload,
});
