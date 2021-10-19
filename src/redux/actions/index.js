const API_URL = 'https://economia.awesomeapi.com.br/json/all';

export const addUser = (info) => ({ type: 'SAVE_USER_INFO', user: info });

export const addExpense = (expense) => ({ type: 'ADD_EXPENSE', expense });

export function addExpenseAction(expense) {
  return (dispatch) => fetch(API_URL)
    .then((response) => response.json())
    .then((json) => {
      const keys = Object.keys(json);
      const values = Object.values(json);
      const exchangeRates = keys.reduce((acc, currency, index) => {
        acc[currency] = values[index];
        return acc;
      }, {});
      dispatch(addExpense({ ...expense, exchangeRates: { ...exchangeRates } }));
    });
}

export const saveTotalExpenses = (totalExpenses) => ({
  type: 'SAVE_TOTAL_EXPENSES', totalExpenses });
