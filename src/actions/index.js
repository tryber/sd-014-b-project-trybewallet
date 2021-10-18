export const SAVE_EMAIL = 'SAVE_EMAIL';
export const REQUEST_CURRENCIES = 'REQUEST_CURRENCIES';
export const GET_CURRENCIES = 'GET_CURRENCIES';

const LIMIT_CONTROL = 3;

export const saveEmail = (email) => ({
  type: SAVE_EMAIL,
  email,
});

function requestCurrencies() {
  return { type: REQUEST_CURRENCIES };
}

function getCurrencies(json) {
  return {
    type: GET_CURRENCIES,
    payload: Object.keys(json).filter((currency) => currency.length === LIMIT_CONTROL),
  };
}

function failedRequest(error) {
  return { type: FAILED_REQUEST, payload: error };
}

export const fetchCurrencies = () => async (dispatch) => {
  try {
    dispatch(requestCurrencies());
    const endpoint = 'https://economia.awesomeapi.com.br/json/all';
    const fetchUrl = await fetch(endpoint);
    const jsonParsing = await fetchUrl.json();
    dispatch(getCurrencies(jsonParsing));
  } catch (error) {
    return dispatch(failedRequest(error));
  }
};
