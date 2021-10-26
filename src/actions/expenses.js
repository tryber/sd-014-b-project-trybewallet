import { getExpenses } from '../services';

export const ADD_DATA_EXPENSES = 'ADD_DATA_EXPENSES';

export const addDataExpenses = (dataExpenses) => ({
  type: ADD_DATA_EXPENSES,
  payload: dataExpenses,
});

export const addDataExchangeRates = (dataExchangeRates) => ({
  type: ADD_DATA_EXPENSES,
  payload: dataExchangeRates,
});

export const getExpensesApiThunk = (dataExpenses) => async (dispatch) => {
  dispatch(addDataExpenses(dataExpenses));
  const allCurrencies = await getExpenses();
  // const FilteredCurrencies = allCurrencies
  //   .filter((currency) => {
  //     console.log(FilteredCurrencies);
  //     console.log(currencies);
  //     return = (currency !== 'USDT' && currency);
  //   });
};
