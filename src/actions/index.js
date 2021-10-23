// Coloque aqui suas actions
export const SEND_LOGIN = 'SEND_LOGIN';
export const SEND_WALLET_INFO = 'SEND_WALLET_INFO';
export const SEND_EXPENSE_INFO = 'SEND_EXPENSE_INFO';

export const sendLogin = (email) => ({
  type: SEND_LOGIN, email,
});

export const sendWalletInfo = (walletInfo) => ({
  type: SEND_WALLET_INFO, walletInfo,
});

export const sendExpenseInfo = (expense) => ({
  type: SEND_EXPENSE_INFO, expense,
});
