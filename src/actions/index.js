// import { getCurrenciesData } from '../../data/FetchAPI' nao funciona por que?
// Quandotem apenas 1 export em um arquivo, ele funciona sem as chaves {}.
// No momento em que tem mais de 1, esse arquivo
// passa a ser um objeto e precisa desconstrui-lo pra importar o que tu precisa.
// so existe um export default por aquivo
import fetchCurrenciesData from '../data/FetchAPI';

export const SET_EMAIL_VALUE = 'SET_EMAIL_VALUE';

export const setEmailValue = (payload) => (
  {
    type: SET_EMAIL_VALUE, payload,
  }
);
// ate aqui ação do user so

// acçoes da wallet:
export const GET_CURRENCIES_DATA_SUCCES = 'GET_CURRENCIES_DATA_SUCCES';
export const SET_WALLET_DATA = 'SET_WALLET_DATA';

export const getCurrenciesDataSucces = (payload) => ( // ação de acessar a API (nao literalmente)
  { type: 'GET_CURRENCIES_DATA_SUCCES', payload });

export const setWalletData = (payload) => (
  {
    type: 'SET_WALLET_DATA',
    payload,
  });

export const GET_CURRENCIES_DATA_SUCCES_ERROR = 'GET_CURRENCIES_DATA_SUCCES_ERROR';
export const getCurrenciesDataError = (error) => (
  {
    type: 'GET_CURRENCIES_DATA_SUCCES_ERROR',
    error,
  }
);

export const getCurrenciesDataThunk = () => async (dispatch) => {
  try {
    const response = await fetchCurrenciesData();
    const payload = Object.keys(response);
    return dispatch(getCurrenciesDataSucces(payload));
  } catch (error) {
    dispatch(getCurrenciesDataError(error));
  }
};

// The Object.keys() method returns an array of a given object's own enumerable property names,
// iterated in the same order that a normal loop would.
