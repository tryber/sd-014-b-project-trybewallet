export const SUBMIT_LOGIN = 'SUBMIT_LOGIN';
export const SUBMIT_CURRENCIES = 'SUBMIT_CURRENCIES';
export const SUBMIT_EXPENSE = 'SUBMIT_EXPENSE';
export const DELETE_EXPENSE = 'DELETE_EXPENSE';

export const userEmail = (payload) => ({
  type: SUBMIT_LOGIN,
  payload,
});

export const submitCurrencies = (payload) => ({
  type: SUBMIT_CURRENCIES,
  payload,
});

export const submitExpense = (expense) => ({
  type: SUBMIT_EXPENSE,
  expense,
});

export const deleteExpense = (newExpenses) => ({
  type: DELETE_EXPENSE,
  newExpenses,
});

export const fetchAPIsubmitExpense = (expense) => async (dispatch) => {
  const response = await fetch('https://economia.awesomeapi.com.br/json/all');
  const quotation = await response.json();
  expense.exchangeRates = quotation;
  delete expense.exchangeRates.USDT;
  return dispatch(submitExpense(expense));
};
