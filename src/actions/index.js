// Coloque aqui suas actions

export const EMAIL_AND_PASSWORD = 'EMAIL_AND_PASSWORD';

export const getUserInfo = (userInfo) => ({
  type: EMAIL_AND_PASSWORD, email: userInfo.email, password: userInfo.password });

//--------------------------------------------------------------------------------

export const REQUEST_CURRENCIES = 'REQUEST_CURRENCIES';
export const RECEIVE_CURRENCIES = 'RECEIVE_CURRENCIES';

export const requestCurrencies = () => ({
  type: REQUEST_CURRENCIES,
});

export const receiveCurrencies = (currencies) => ({
  type: RECEIVE_CURRENCIES,
  currencies,
});

export const fetchCurrencies = () => (dispatch) => {
  dispatch(requestCurrencies());
  return fetch('https://economia.awesomeapi.com.br/json/all')
    .then((response) => response.json())
    .then((currencies) => dispatch(receiveCurrencies(currencies)));
};

//--------------------------------------------------------------------------------

export const UPDATE_EXPENSES = 'UPDATE_EXPENSES';

export const addToExpenses = (
  { id, value, description, currency, method, tag, exchangeRates },
) => ({
  type: UPDATE_EXPENSES,
  formState: { id, value, description, currency, method, tag, exchangeRates },
});
