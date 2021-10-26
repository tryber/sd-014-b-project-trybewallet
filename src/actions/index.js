export const CHECK_EMAIL = 'SEND_PERSONAL_FORM';
export const SEND_RATES = 'SEND_EXCHANGE_RATES';

export const checkLogin = (email) => ({
  type: CHECK_EMAIL, email,
});

export const exchangeRating = (rates) => ({
  type: SEND_RATES, rates,
});
