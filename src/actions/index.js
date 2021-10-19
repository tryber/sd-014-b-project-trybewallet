// Coloque aqui suas actions
export const LOGIN = 'LOGIN';
export const WALLET = 'WALLET';
export const FETCH_API = 'FETCH_API';
export const LIST_CURRENCIES = 'LIST_CURRENCIES';

export const sendLogin = (userinfo) => ({
  type: LOGIN,
  userinfo,
});

export const sendWallet = (wallet) => ({
  type: WALLET,
  wallet,
});
