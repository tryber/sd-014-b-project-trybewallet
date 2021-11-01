// Coloque aqui suas actions
export const SEND_USER_INFO = 'SEND_USER_INFO';
export const WALLET_INFO = 'WALLET-INFO';
export const ALL_CURRENCIES = 'ALL_CURRENCIES';

export const sendUserInfo = (email) => ({
  type: SEND_USER_INFO,
  email,
});

export const walletInfo = (expenses) => ({
  type: WALLET_INFO,
  expenses,
});

export const currenciesInfo = (currencies) => ({
  type: ALL_CURRENCIES,
  currencies,
});
