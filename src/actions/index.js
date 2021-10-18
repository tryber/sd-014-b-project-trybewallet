// Coloque aqui suas actions
export const LOGIN = 'LOGIN';
export const WALLET = 'WALLET';

export const sendLogin = (userinfo) => ({
  type: LOGIN,
  userinfo,
});

export const sendWallet = (wallet) => ({
  type: WALLET,
  wallet,
});
