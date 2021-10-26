// Coloque aqui suas actions
// Requisito 3 desenvolvido com ajuda do Grupo 22

export const UserEmailPassword = 'EMAIL_AND_PASSWORD';

export const getUserInfo = (userInfo) => ({
  type: UserEmailPassword, email: userInfo.email, password: userInfo.password });

export const REQUEST_CURRENCIES = 'REQUEST_CURRENCIES';
export const RECEIVED_CURRENCIES = 'RECEIVED_CURRENCIES';
export const LOAD_EXPENSE = 'LOAD_EXPENSE';

export const requestCurrencies = () => ({
  type: REQUEST_CURRENCIES,
});

export const receiveCurrencies = (currencies) => ({
  type: RECEIVED_CURRENCIES,
  currencies,
});

export const fetchCurrencies = () => (dispatch) => {
  dispatch(requestCurrencies());
  return fetch('https://economia.awesomeapi.com.br/json/all')
    .then((response) => response.json())
    .then((currencies) => dispatch(receiveCurrencies(currencies)));
};

export const loadExpense = (
  { id, value, description, currency, method, tag, exchangeRates },
) => ({
  type: LOAD_EXPENSE,
  formState: { id, value, description, currency, method, tag, exchangeRates },
});
