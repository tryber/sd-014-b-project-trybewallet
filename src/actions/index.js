// ------------------------ ACTION FOR LOGIN ------------------------

export const REQUEST_LOGIN = 'REQUEST_LOGIN';

export const requestLogin = (payload) => ({
  type: REQUEST_LOGIN, payload,
});

// ------------------------ ACTION REQUEST API TO WALLET ------------------------
export const REQUEST_API = 'REQUEST_API';
export const REQUEST_API_SUCCESS = 'REQUEST_API_SUCCESS';
export const REQUEST_API_ERROR = 'REQUEST_API_ERROR';

export const requestAPI = (payload) => ({
  type: REQUEST_API, payload,
});

export const requestAPISuccess = (payload) => ({
  type: REQUEST_API_SUCCESS, payload,
});

export const requestAPIError = (payload) => ({
  type: REQUEST_API_ERROR, payload,
});

const API_URL = 'https://economia.awesomeapi.com.br/json/all';

export const fetchCurrencyAPI = () => (dispatch) => {
  dispatch(requestAPI());
  fetch(API_URL)
    .then((result) => result.json())
    .then((data) => {
      delete data.USDT;
      dispatch(requestAPISuccess(data));
    })
    .catch((error) => dispatch(requestAPIError(error)));
};
// ------------------------ REQUEST API TO WALLET ------------------------
export const REQUEST_API_EXPENSES = 'REQUEST_API_EXPENSES';
export const REQUEST_API_EXPENSES_SUCCESS = 'REQUEST_API_EXPENSES_SUCCESS';
export const REQUEST_API_EXPENSES_ERROR = 'REQUEST_API_EXPENSES_ERROR';

export const requestAPIExpenses = () => ({
  type: REQUEST_API_EXPENSES,
});

export const requestAPIExpensesSuccess = (expensesInfo, id, dataAPI) => ({
  type: REQUEST_API_EXPENSES_SUCCESS,
  expensesInfo,
  id,
  dataAPI,
});

export const requestAPIExpensesError = (payload) => ({
  type: REQUEST_API_EXPENSES_ERROR,
  payload,
});

export const expensesAPI = (state, id) => (dispatch) => {
  dispatch(requestAPIExpenses());

  fetch(API_URL)
    .then((response) => response.json())
    .then((data) => dispatch(requestAPIExpensesSuccess(state, id, data)))
    .catch((error) => dispatch(requestAPIExpensesError(error)));
};
