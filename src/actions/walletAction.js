export const GET_API_DATA = 'GET_API_DATA';
export const FAILED_REQUEST = 'FAILED_REQUEST';

// actions creators
export function getCoin(data) {
  return {
    type: GET_API_DATA,
    payload: data,
  };
}

export function faildedRequest(error) {
  return {
    type: FAILED_REQUEST,
    payload: error,
  };
}

export function fetchDataAction() {
  const URL = 'https://economia.awesomeapi.com.br/json/all';
  return async (dispatch) => {
    try {
      const response = await fetch(URL);
      const data = await response.json();
      return dispatch(getCoin(data));
    } catch (error) {
      dispatch(faildedRequest(error));
    }
  };
}
