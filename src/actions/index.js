export const LOGIN = 'LOGIN';
export const WALLET_EXPENSES = 'WALLET_EXPENSES';

export function loginAction(payload) {
  return {
    type: LOGIN,
    payload,
  };
}

export function handleWalletExpenses(object) {
  return {
    type: WALLET_EXPENSES,
    object,
  };
}
