export const SAVE_EMAIL = 'SAVE_EMAIL';
export const REQUEST_CURRENCIES = 'REQUEST_CURRENCIES'

export const saveEmail = (value) => ({ type: SAVE_EMAIL, value });

export const requestCurrencies = (payload) => ({ type: REQUEST_CURRENCIES, payload });
