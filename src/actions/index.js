export const GET_MOEDAS = 'GET_MOEDAS';
export const FAILED = 'FAILED';
export const ADD_EMAIL = 'ADD_EMAIL';

export const addEmail = (payload) => ({ type: ADD_EMAIL, payload });
export const getMoedas = (payload) => ({ type: GET_MOEDAS, payload });
export const failed = (error) => ({ type: FAILED, payload: error });

export function fetchApi(expense) {
  return async (dispatch) => {
    try {
      const response = await fetch(' https://economia.awesomeapi.com.br/json/all');
      const exchangeRates = await response.json();
      delete exchangeRates.USDT;
      return dispatch(getMoedas({ ...expense, exchangeRates }));
    } catch (error) {
      return null;
    }
  };
}
