// Coloque aqui suas actions
export const SET_USER_VALUE = 'SET_USER_VALUE';
export const SET_WALLET_VALUE = 'SET_WALLET_VALUE';

export const setUserValue = (load) => (
  {
    type: SET_USER_VALUE, load,
  }
);

export const setWalletValue = (load) => (
  {
    type: SET_WALLET_VALUE, load,
  }
);
