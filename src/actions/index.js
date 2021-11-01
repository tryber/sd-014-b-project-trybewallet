// Coloque aqui suas actions
export const SEND_USER_INFO = 'SEND_USER_INFO';
export const WALLET_INFO = 'WALLET-INFO';

export const sendUserInfo = (payload) => ({
  type: SEND_USER_INFO,
  payload,
});

export const walletInfo = (payload) => ({
  tyoe: WALLET_INFO,
  payload,
});
