export const REQUEST_LOGIN = 'REQUEST_LOGIN';

export const requestLogin = (payload) => ({
  type: REQUEST_LOGIN, payload,
});

export const REQUEST_WALLET = 'REQUEST_WALLET';

export const requestWallet = (wallet) => ({
  type: REQUEST_WALLET, wallet,
});
