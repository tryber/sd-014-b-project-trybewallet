export const REQUEST_LOGIN = 'REQUEST_LOGIN';

export const requestLogin = (login) => ({
  type: REQUEST_LOGIN, login,
});

export const REQUEST_WALLET = 'REQUEST_WALLET';

export const requestWallet = (wallet) => ({
  type: REQUEST_WALLET, wallet,
});
