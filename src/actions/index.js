// Coloque aqui suas actions
import fetchEndPoint from '../service/API';

export const SET_USERS = 'SET_USERS';
export const SET_EXCHANGE_RATES_SUCCESS = 'SET_EXCHANGE_RATES_SUCCESS';
export const GET_CURRENCY_SUCCESS = 'GET_CURRENCY_SUCCESS';

export const setUserValue = (payload) => (
  {
    type: SET_USERS, payload,
  }
);

export const setExchangeRatesSucess = (payload) => (
  {
    type: SET_EXCHANGE_RATES_SUCCESS, payload,
  }
);

export const getCurrencySucess = (payload) => ({
  type: GET_CURRENCY_SUCCESS, payload,
});

export const getCurrencyThunk = (expense) => async (dispatch) => {
  const response = await fetchEndPoint();
  if (expense !== undefined) {
    const { expenses, newExense } = expense;
    let totalExpenses = expenses;
    const currentExpenses = { ...newExense, exchangeRates: response };
    totalExpenses = [...totalExpenses, currentExpenses];
    dispatch(setExchangeRatesSucess(totalExpenses));
  } else {
    dispatch(getCurrencySucess(response));
  }
};
