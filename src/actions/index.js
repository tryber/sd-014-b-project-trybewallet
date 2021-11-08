// Coloque aqui suas actions

export const SUBMIT_USER = 'SUBMIT_USER';

export const saveEmail = (email) => ({
  type: SUBMIT_USER,
  payload: {
    email,
  },
});

export const SUBMIT_EXPENSES = 'SUBMIT_EXPENSES';

export const submitExpenses = (expenses) => ({
  type: SUBMIT_EXPENSES,
  payload: expenses,
});
