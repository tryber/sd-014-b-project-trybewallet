export const CHANGE_WALLET = 'CHANGE_WALLET';
export const LOGGED_EMAIL = 'LOGGED_EMAIL';

export const loggedEmail = (email) => ({
  type: LOGGED_EMAIL,
  email,
});

export const changeWallet = (currencies, expenses) => ({
  type: CHANGE_WALLET,
  payload: {
    wallet: {
      currencies,
      expenses,
    },
  },
});
