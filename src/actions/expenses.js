// import { getExpenses } from '../services';

export const ADD_DATA_EXPENSES = 'ADD_DATA_EXPENSES';
export const ADD_DATA_EXCHANGE_RATES = 'ADD_DATA_EXCHANGE_RATES';

export const addDataExpenses = (expenses) => ({
  type: ADD_DATA_EXPENSES,
  payload: { expenses },
});

// export const getExpensesApiThunk = (exchangeRates, expenses) => (dispatch) => {
//   // const exchangeRates = await getExpenses();
//   dispatch(addDataExchangeRates(exchangeRates));
//   dispatch(addDataExpenses(expenses));
//   // const FilteredCurrencies = allCurrencies
//   //   .filter((currency) => {
//   //     console.log(FilteredCurrencies);
//   //     console.log(currencies);
//   //     return = (currency !== 'USDT' && currency);
//   //   });
// };
