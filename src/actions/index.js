export const SEND_USER_INFO = 'SEND_USER_INFO';
export const SEND_WALLET_INFO = 'SEND_WALLET_INFO';

export const sendUserInfo = (payload) => ({
  type: SEND_USER_INFO,
  payload,
});

export const sendWalletInfo = (payload) => ({
  type: SEND_WALLET_INFO,
  payload,
});
