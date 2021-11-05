// Coloque aqui suas actions

export const LOGIN_EMAIL = 'LOGIN_EMAIL';
export const REQUEST_API = 'REQUEST_API';
export const GET_MONEY = 'GET_MONEY';
export const FAILED_REQUEST = 'FAILED_REQUEST';

export const loginEmail = (email) => ({
  type: LOGIN_EMAIL,
  email,
});

export const requestApi = () => ({
  type: REQUEST_API,
});

export const getMoney = (payload) => ({
  type: GET_MONEY,
  payload,
});

export const failedRequest = (error) => ({
  type: FAILED_REQUEST,
  payload: error,
});

export function requestAPIMoney() {
  return (dispatch) => {
    dispatch(requestApi());
    return fetch('https://economia.awesomeapi.com.br/json/all')
      .then((response) => response.json()
        .then(
          (data) => dispatch(getMoney(data)),
        ),
      (error) => dispatch(failedRequest(error)));
  };
}
