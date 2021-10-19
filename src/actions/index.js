// Coloque aqui suas actions
export const LOGIN = 'LOGIN';
export const SUBMIT_EXPENSE = 'SUBMIT_EXPENSE';
export const UPDATE_EXPENSES = 'UPDATE_EXPENSES';

export const loginSaveEmail = (email) => ({
  type: LOGIN,
  email,
});

export const submitExpense = (expense) => ({
  type: SUBMIT_EXPENSE,
  expense,
});

export const updateExpenses = (expenses) => ({
  type: UPDATE_EXPENSES,
  expenses,
});

export const preparingExpense = (expense) => async (dispatch) => {
  const response = await fetch('https://economia.awesomeapi.com.br/json/all');
  const quotation = await response.json();
  expense.exchangeRates = quotation;
  delete expense.exchangeRates.USDT;
  return dispatch(submitExpense(expense));
};
