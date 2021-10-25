export const SUBMIT_LOGIN = 'SUBMIT_LOGIN';
export const SUBMIT_CURRENCIES = 'SUBMIT_CURRENCIES';

export const userEmail = (payload) => ({
  type: SUBMIT_LOGIN,
  payload,
});

export const submitCurrencies = (payload) => ({
  type: SUBMIT_CURRENCIES,
  payload,
});
