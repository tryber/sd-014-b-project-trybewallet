import getCurrencyInfo from '../services/currencyAPI';

export const SET_USER_EMAIL = 'SET_USER_EMAIL';
export const SET_USER_PASSWORD = 'SET_USER_PASSWORD';
export const RECEIVE_CURRENCIES_INFO = 'RECEIVE_CURRENCIES_INFO';
export const SEND_EXAPENSES_INFO = 'SEND_EXPENSES_INFO';

export const setUserEmail = (payload) => ({
  type: SET_USER_EMAIL,
  payload,
});
export const setUserPassword = (payload) => ({
  type: SET_USER_PASSWORD,
  payload,
});

export const receiveCurrenciesInfo = (payload) => ({
  type: RECEIVE_CURRENCIES_INFO,
  payload,
});

export const fetchCurrencies = () => (dispatch) => {
  getCurrencyInfo()
    .then((currencyInfo) => {
      dispatch(receiveCurrenciesInfo(Object.keys(currencyInfo)));
    });
};

export const sendExpensesInfo = (payload) => ({
  type: SEND_EXAPENSES_INFO,
  payload,
});
