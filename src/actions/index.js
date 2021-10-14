// Requisito 3: Utilize o Redux para salvar no estado global as informações da pessoa logada

export const SET_EMAIL_USER = 'SET_EMAIL_USER';
// Requisito 7: implementação da API
export const REQUEST_API = 'REQUEST_API';
export const REQUEST_API_SUCCESS = 'REQUEST_API_SUCCESS';
export const REQUEST_API_ERROR = 'REQUEST_API_ERROR';

export const setEmailUser = (payload) => ({
  type: SET_EMAIL_USER,
  payload,
});

export const requestApi = (payload) => ({
  type: REQUEST_API,
  payload,
});

export const requestApiSuccess = (payload) => ({
  type: REQUEST_API_SUCCESS,
  payload,
});

export const requestApiError = (payload) => ({
  type: REQUEST_API_ERROR,
  payload,
});

// Requisito 8
const endpoint = 'https://economia.awesomeapi.com.br/json/all';

export const fetchApi = () => (dispatch) => {
  dispatch(requestApi());
  fetch(endpoint)
    .then((result) => result.json())
    .then((data) => {
      delete data.USDT;
      dispatch(requestApiSuccess(data));
    })
    .catch((error) => dispatch(requestApiError(error)));
};

// Requisito 8
export const EXPENSES_USER = 'EXPENSES_USER';
export const EXPENSES_USER_SUCCESS = 'EXPENSES_USER_SUCCESS';
export const EXPENSES_USER_ERROR = 'EXPENSES_USER_ERROR';

export const expenseUser = () => ({
  type: EXPENSES_USER,
});

export const expenseUserSuccess = (expenseStateInfo, id, dataApi) => ({
  type: EXPENSES_USER_SUCCESS,
  expenseStateInfo,
  id,
  dataApi,
});

export const expenseUserError = (payload) => ({
  type: EXPENSES_USER_ERROR,
  payload,
});

export const expenseApi = (state, id) => (dispatch) => {
  dispatch(expenseUser());

  fetch(endpoint)
    .then((response) => response.json())
    .then((data) => dispatch(expenseUserSuccess(state, id, data)))
    .catch((error) => dispatch(expenseUserError(error)));
};
