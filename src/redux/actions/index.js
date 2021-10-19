// import { getCurrenciesData } from '../../data/FetchAPI' nao funciona por que?
// Quandotem apenas 1 export em um arquivo, ele funciona sem as chaves {}.
// No momento em que tem mais de 1, esse arquivo
// passa a ser um objeto e precisa desconstrui-lo pra importar o que tu precisa.
// so existe um export default por aquivo
import getDataCurrencies from '../../data/FetchAPI';

export const SET_EMAIL_VALUE = 'SET_EMAIL_VALUE';

export const setEmailValue = (payload) => (
  {
    type: SET_EMAIL_VALUE, payload,
  }
);

export const GET_CURRENCIES_DATA = 'GET_CURRENCIES_DATA';
export const getCurrencyData = (currencies) => ({
  type: GET_CURRENCIES_DATA,
  currencies,
});

export const getCurrenciesDataThunk = () => (dispatch) => {
  getDataCurrencies()
    .then((currencies) => {
      dispatch(getCurrencyData(currencies));
    });
};

export const SET_EXPENSES = 'SET_EXPENSES';
export const setDataExpenses = (expenses) => ({
  type: SET_EXPENSES,
  expenses,
});
