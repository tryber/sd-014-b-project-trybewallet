const LOGIN = 'LOGIN';
const GET_CURRENCY = 'GET_CURRENCY';
const REQUEST_CURRENCY = 'REQUEST_CURRENCY';

export const userLogin = (payload) => ({
  type: LOGIN,
  payload,
});

export const getCurrency = (data) => ({
  type: GET_CURRENCY,
  payload: data,
});

export const requestValues = () => ({
  type: REQUEST_CURRENCY,
});

export const fetchAPI = () => async (dispatch) => {
  dispatch(requestValues());
  try {
    const request = await fetch('https://economia.awesomeapi.com.br/json/all');
    const resolve = await request.json();
    return dispatch(getCurrency(resolve));
  } catch (error) {
    console.log(`Ocorreu um: ${error}`);
  }
};
