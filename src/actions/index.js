export const CHECK_EMAIL = 'SEND_PERSONAL_FORM';
export const SEND_COINS = 'SEND_EXCHANGE_COINS';

export const checkLogin = (email) => ({
  type: CHECK_EMAIL, email,
});

export const exchangeCoins = (rates) => ({
  type: SEND_COINS, rates,
});
