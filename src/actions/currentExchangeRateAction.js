export const GET_EXCHANGE_RATE = 'GET_EXCHANGE_RATE';

export const getExchangeRate = (data) => ({
  type: GET_EXCHANGE_RATE,
  payload: data,
});

export const fetchExchangeRateFromApi = () => async (dispatch) => {
  const response = await fetch('https://economia.awesomeapi.com.br/json/all');
  const data = await response.json();
  return dispatch(getExchangeRate(data));
};
