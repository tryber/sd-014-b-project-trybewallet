export const SET_LOGIN = 'SET_LOGIN';
export const SET_WALLET = 'SET_WALLET';

export const setLogin = (payload) => (
  {
    type: SET_LOGIN, payload,
  }
);

export const setWallet = (payload) => (
  {
    type: SET_WALLET, payload,
  }
);
