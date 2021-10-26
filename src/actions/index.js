export const SAVE_USER_DATA = 'SAVE_USER_DATA';
export const SUBMIT_CURRENCIES = 'SUBMIT_CURRENCIES';

export const user = (payload) => ({
  type: SAVE_USER_DATA,
  payload,
});

export const submitCurrencies = (payload) => ({
  type: SUBMIT_CURRENCIES,
  payload,
});
