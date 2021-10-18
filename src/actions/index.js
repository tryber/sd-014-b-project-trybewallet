// Coloque aqui suas actions
export const SAVE_LOGIN_INFO = 'SAVE_LOGIN_INFO';
export const SAVE_CURRENCIES = 'SAVE_CURRENCIES';

export const loginInfoAction = (state) => (
  { type: SAVE_LOGIN_INFO,
    state,
  });

export const currenciesAction = (currencies) => ({
  type: SAVE_CURRENCIES,
  currencies,
});
