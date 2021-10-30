const API_URL = 'https://economia.awesomeapi.com.br/json/all';

export const addUser = (info) => ({ type: 'SAVE_USER_INFO', user: info });

export const addExpense = (expense) => ({ type: 'ADD_EXPENSE', expense });

export const deleteExpense = (id) => ({ type: 'DELETE_EXPENSE', id });

export const editExpenseAction = (expense) => ({ type: 'EDIT_EXPENSE', expense });

export const sumTotalExpenses = (value) => ({
  type: 'SUM_TO_TOTAL_EXPENSES', value });

export const updateTotalExpenses = () => ({
  type: 'UPDATE_TOTAL_EXPENSES' });

export const updateCurrencies = (currencies) => ({
  type: 'UPDATE_CURRENCIES', currencies });

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
      const value = parseFloat(exchangeRates[expense.currency]
        .ask) * parseFloat(expense.value);
      dispatch(addExpense({ ...expense, exchangeRates }));
      dispatch(sumTotalExpenses(value));
    });
}
