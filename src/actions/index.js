// Coloque aqui suas actions
export const SAVE_EMAIL = 'SAVE_EMAIL';
export const saveEmail = (email) => ({
  type: SAVE_EMAIL,
  payload: email,
});

// export const SAVE_CURRENCIES = 'SAVE_CURRENCIES';
// export const fetchCurrencies = (currencies) => ({
//   type: SAVE_CURRENCIES,
//   payload: currencies,
// });

// export const apiData = () => async (dispatch) => {
//   const apiData = await fetch('https://economia.awesomeapi.com.br/json/all')
//     .then(response => response.json());
//   const currencies = Object.keys(apiData);
//   dispatch(fetchCurrencies(currencies))
// };