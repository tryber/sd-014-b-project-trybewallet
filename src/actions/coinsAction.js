export const GET_COINS = 'GET_COIN';
export const FAILED_REQUEST = 'FAILED_REQUEST';

export const getCoins = (data) => ({
  type: GET_COINS,
  payload: data,
});

export const failedRequest = (error) => ({
  type: FAILED_REQUEST,
  payload: error,
});

export const fetchCoinsFromApi = () => async (dispatch) => {
  try {
    const response = await fetch('https://economia.awesomeapi.com.br/json/all');
    const data = await response.json();
    return dispatch(getCoins(data));
  } catch (error) {
    dispatch(failedRequest(error));
  }
};
