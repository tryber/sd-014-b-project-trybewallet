export const GET_CURRENCIES = 'GET_CURRENCIES';
export const FAILED_REQUEST = 'FAILED_REQUEST';

export function getCurrencies(data) {
  return {
    type: GET_CURRENCIES,
    payload: data,
  };
}

export function failedRequest(error) {
  return {
    type: FAILED_REQUEST,
    payload: error,
  };
}

export function fetchCurrenciesAction() {
  return async (dispatch) => {
    try {
      const response = await fetch('https://economia.awesomeapi.com.br/json/all');
      const data = response.json();
      return dispatch(getCurrencies(data));
    } catch (error) {
      dispatch(failedRequest(error));
    }
  };
}
