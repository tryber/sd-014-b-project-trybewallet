// Coloque aqui suas actions
export const LOGIN_USER = 'RECEIVE_LOGIN_USER';

export const LOAD_API = 'RECEIVE_LOAD_API';

export const GET_DATA = 'GET_DATA';

export const SAVE_EXPENSES = 'SAVE_EXPENSES';

export const FAILED_REQUEST = 'FAILED_REQUEST';

export const UPDATE_RATES = 'UPDATE_RATES';

export const user = (payload) => ({
  type: LOGIN_USER,
  payload,
});

export function getData(payload) {
  return {
    type: GET_DATA,
    payload,
  };
}

// função da aula do Vitu
export function failedRequest(payload) {
  return {
    type: FAILED_REQUEST,
    payload,
  };
}

export const ApiRequest = (payload) => ({
  type: LOAD_API,
  payload,
});

export const updateRates = (payload) => ({
  type: UPDATE_RATES,
  payload,
});

export function getFecthAPI() {
  return async (dispatch) => {
    const response = await fetch('https://economia.awesomeapi.com.br/json/all');
    const data = await response.json();
    console.log('getFetchAPI');
    return dispatch(ApiRequest(data));
  };
}

// export function getUpdataAPI() {
//   return async (dispatch) => {
//     const response = await fetch('https://economia.awesomeapi.com.br/json/all');
//     const data = await response.json();
//     console.log('getUpdataAPI');
//     return dispatch(ApiRequest(data));
//   };
// }

export function getUpdataAPI() {
  return async (dispatch) => {
    const response = await fetch('https://economia.awesomeapi.com.br/json/all');
    const data = await response.json();
    console.log('getUpdataAPI');
    return dispatch(updateRates(data));
  };
}

export const saveExpenses = (payload) => ({
  type: SAVE_EXPENSES,
  payload,
});
