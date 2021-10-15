// Coloque aqui suas actions
export const SAVE_EMAIL = 'SAVE_EMAIL';

export const saveEmail = (email) => ({
  type: SAVE_EMAIL,
  payload: email,
});

export const SAVE_CURRENCIES = 'SAVE_CURRENCIES';

const endpoint = 'https://economia.awesomeapi.com.br/json/all';

export const fetchCurrencies = (currencies) => ({
  type: SAVE_CURRENCIES,
  payload: currencies,
});

export const fetchData = () => async (dispatch) => {
  const resolveData = await fetch(endpoint).then((resolve) => resolve.json());
  const currencies = Object.keys(resolveData);
  dispatch(fetchCurrencies(currencies));
};
