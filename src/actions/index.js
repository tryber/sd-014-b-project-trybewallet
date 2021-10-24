// Coloque aqui suas actions
export const VALID_USER = 'VALID_USER';
export const VALID_WALLET = 'VALID_WALLET';
export const VALID_WALLET_EXPENSES = 'VALID_WALLET_EXPENSES';

export const validUser = (payload) => ({
  type: VALID_USER,
  payload,
});

export const validWallet = (payload) => ({
  type: VALID_WALLET,
  payload,
});

export const validWalletExpenses = (payload) => ({
  type: VALID_WALLET_EXPENSES,
  payload,
});
