export const USER = 'USER';
export const GET_CURRENCY = 'GET_CURRENCY';
export const FAILED_REQUEST = 'FAILED_REQUEST';

export const userAction = (payload) => ({
  type: USER,
  payload,
});

export const getCurrency = (payload) => ({
  type: GET_CURRENCY,
  payload,
});

export const failedRequest = (error) => ({
  type: FAILED_REQUEST,
  payload: error,
});

export function fetchCurrency() {
  return async (dispatch) => {
    try {
      const response = await fetch('https://economia.awesomeapi.com.br/json/all');
      const responseJson = await response.json();
      return dispatch(getCurrency(responseJson));
    } catch (error) {
      dispatch(failedRequest(error));
    }
  };
}
