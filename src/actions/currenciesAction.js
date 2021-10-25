export const GET_CURRENCY = 'GET_CURRENCY';
export const FAILED_REQUEST = 'FAILED_REQUEST';

export const getCurrency = (payload) => ({ type: GET_CURRENCY, payload });
export const failedRequest = (payload) => ({ type: FAILED_REQUEST, payload });
export const fetchCurrencies = () => (
  async (dispatch) => {
    try {
      const response = await fetch('https://economia.awesomeapi.com.br/json/all');
      const data = await response.json();
      delete data.USDT;
      return dispatch(getCurrency(data));
    } catch (error) {
      dispatch(failedRequest(error));
    }
  }
);
