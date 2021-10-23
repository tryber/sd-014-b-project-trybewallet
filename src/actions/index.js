export const SUBMIT_LOGIN = 'SUBMIT_LOGIN';
export const SUBMIT_WALLET = 'SUBMIT_WALLET';

export const actionRegisterUser = (payload) => ({
  type: SUBMIT_LOGIN,
  payload,
});

export const actionSetExpenses = (payload) => ({
  type: SUBMIT_WALLET,
  payload,
});
