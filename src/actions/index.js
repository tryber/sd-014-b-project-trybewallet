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

export const fetchApi = () => (dispatch) => {
  const endpoint = 'https://economia.awesomeapi.com.br/json/all';
  dispatch(requestApi());
  fetch(endpoint)
    .then((result) => result.json())
    .then((data) => {
      delete data.USDT;
      dispatch(requestApiSuccess(data));
    })
    .catch((error) => dispatch(requestApiError(error)));
};
