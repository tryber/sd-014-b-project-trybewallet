// import { getCurrenciesData } from '../../data/FetchAPI' nao funciona por que?
// Quandotem apenas 1 export em um arquivo, ele funciona sem as chaves {}.
// No momento em que tem mais de 1, esse arquivo
// passa a ser um objeto e precisa desconstrui-lo pra importar o que tu precisa.
// so existe um export default por aquivo
import getCurrenciesData from '../../data/FetchAPI';

export const SET_EMAIL_VALUE = 'SET_EMAIL_VALUE';

export const setEmailValue = (payload) => (
  {
    type: SET_EMAIL_VALUE, payload,
  }
);

// Wallet actions
export const GET_CURRENCIES_DATA_SUCCESS = 'GET_CURRENCIES_DATA_SUCCESS';

export const getCurrenciesSuccess = (currencies) => ({
  type: GET_CURRENCIES_DATA_SUCCESS,
  currencies,
});

// currencies é o 'payload', ou seja, o objeto de retorno da action
// é o estado que vamos trabalhar com as moedas

export const GET_CURRENCIES_DATA_ERROR = 'GET_CURRENCIES_DATA_ERROR';

export const getCurrenciesDataError = (payload) => ({
  type: GET_CURRENCIES_DATA_ERROR,
  payload,
});

export const getCurrenciesDataThunk = () => async (dispatch) => {
  try {
    const response = await getCurrenciesData(); // funçao de request API
    const payload = response.currencies;
    dispatch(getCurrenciesSuccess(payload));
  } catch (error) {
    dispatch(getCurrenciesDataError(error));
  }
};
