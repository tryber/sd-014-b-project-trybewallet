export const EMAIL_USER = 'EMAIL_USER';
export const WALLET_EXPENSES = 'WALLET_EXPENSES';
export const SAVE_EXPENSE = 'SAVE_EXPENSE';

export const getEmailUser = (email) => ({
  type: EMAIL_USER,
  email,
});

export const getWallet = (objInfo) => ({
  type: WALLET_EXPENSES,
  objInfo,
});

export const saveExpense = (expense) => ({
  type: SAVE_EXPENSE,
  expense,
});
