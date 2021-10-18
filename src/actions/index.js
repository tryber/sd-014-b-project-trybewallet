import getCurrencies from '../services/economiaAPI';

export const LOGIN_SUCCESSFUL = 'LOGIN_SUCCESSFUL';
export const DELIVER_CURRENCIES = 'DELIVER_CURRENCIES';
export const REQUEST_CURRENCIES = 'REQUEST_CURRENCIES';

export const loginSuccessful = (value) => ({
  type: LOGIN_SUCCESSFUL,
  value,
});

export const deliverCurrencies = (object) => ({
  type: DELIVER_CURRENCIES,
  currencies: object,
});

export const requestCurrencies = () => ({
  type: REQUEST_CURRENCIES,
});

export const fetchEconomiaAPI = () => (dispatch) => {
  dispatch(requestCurrencies());

  getCurrencies()
    .then((object) => {
      const filteredObject = Object.entries(object)
        .filter((currency) => currency[0] !== 'USDT');
      dispatch(deliverCurrencies(filteredObject));
    });
};
