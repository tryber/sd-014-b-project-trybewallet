export const REQUEST_LOGIN = 'REQUEST_LOGIN';

export const requestLogin = (payload) => ({
  type: REQUEST_LOGIN, payload,
});

export const REQUEST_WALLET = 'REQUEST_WALLET';

export const requestWallet = (payload) => ({
  type: REQUEST_WALLET, payload,
});
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
