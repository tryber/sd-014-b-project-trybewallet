// Coloque aqui suas actions

export const SAVE_EMAIL = 'SAVE_EMAIL';
export const GET_CURRENCIES = 'GET_CURRENCIES';
export const FAILED_REQUEST = 'FAILED_REQUEST';
export const ADD_EXPENSE = 'ADD_EXPENSE';

const CURRENCY_API_URL = 'https://economia.awesomeapi.com.br/json/all';

export const saveEmailAction = (payload) => ({
  type: SAVE_EMAIL,
  payload,
});

export const getCurrencies = (data) => ({
  type: GET_CURRENCIES,
  payload: data,
});

export const failedRequest = (error) => ({
  type: FAILED_REQUEST,
  payload: error,
});

export const fetchCurrencies = () => async (dispatch) => {
  try {
    const response = await fetch(CURRENCY_API_URL);
    const data = await response.json();
    delete data.USDT;
    delete data.DOGE;
    return dispatch(getCurrencies(data));
  } catch (err) {
    return dispatch(failedRequest(err));
  }
};

export const addExpenseAction = (exRates) => ({
  type: ADD_EXPENSE,
  payload: exRates,
});

// export const onClickExpenseExchange = () => async (dispatch) => {
//   try {
//     const response = await fetch(CURRENCY_API_URL);
//     const data = await response.json();
//     delete data.USDT;
//     delete data.DOGE;
//     return dispatch(addExpenseAction(data));
//   } catch (error) {
//     return dispatch(failedRequest(error));
//   }
// };
