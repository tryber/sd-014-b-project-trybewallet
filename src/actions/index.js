export const SEND_LOGIN_INFO = 'SEND_LOGIN_INFO';
export const WALLET = 'WALLET';

export const userInformation = (loginInfo) => ({
  type: SEND_LOGIN_INFO,
  loginInfo,
});

export const walletInformation = (wallet) => ({
  type: WALLET,
  wallet,
});
