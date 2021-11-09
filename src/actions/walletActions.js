export const CURRENCIES_INFO = 'CURRENCIES_INFO';
export const ADD_EXPENSE = 'ADD_EXPENSE';
export const UPDATE_EXPENSES = 'UPDATE_EXPENSES';

export const currenciesInfo = (currenciesData) => ({
  type: CURRENCIES_INFO,
  currenciesData,
});

export const addExpense = (expenseData) => ({
  type: ADD_EXPENSE,
  expenseData,
});

export const updateExpenses = (updatedExpenses) => ({
  type: UPDATE_EXPENSES,
  updatedExpenses,
});

export const fetchCurrenciesInfo = () => async (dispatch) => {
  const buffer = await fetch('https://economia.awesomeapi.com.br/json/all');
  const data = await buffer.json();
  delete data.USDT;

  dispatch(currenciesInfo(data));
};
