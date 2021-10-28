export const EMAIL_USER = 'EMAIL_USER';
export const WALLET_EXPENSES = 'WALLET_EXPENSES';
export const GET_COINS = 'GET_COINS';

export const getEmailUser = (email) => ({
  type: EMAIL_USER,
  email,
});

export const getWallet = (objInfo) => ({
  type: WALLET_EXPENSES,
  objInfo,
});

export const getCurrency = (currencies) => ({
  type: GET_COINS,
  currencies,
});
