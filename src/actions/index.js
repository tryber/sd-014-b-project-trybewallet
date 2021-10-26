// Coloque aqui suas actions
export const LOGIN_USER = 'RECEIVE_LOGIN_USER';

export const LOAD_API = 'RECEIVE_LOAD_API';

export const GET_DATA = 'GET_DATA';

// addnewtransaction = 'addnew';

export const FAILED_REQUEST = 'FAILED_REQUEST';

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

export function getFecthAPI() {
  return async (dispatch) => {
    const response = await fetch('https://economia.awesomeapi.com.br/json/all');
    const data = await response.json();
    return dispatch(ApiRequest(data));
  };
}
