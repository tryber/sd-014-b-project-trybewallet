export const USER_SET_INFO = 'USER_SET_INFO';
export const WALLET_SET_INFO = 'WALLET_SET_INFO';

export const userUpdate = (object) => ({
  type: USER_SET_INFO,
  object,
});

export const walletUpdate = (object) => ({
  type: WALLET_SET_INFO,
  object,
});
