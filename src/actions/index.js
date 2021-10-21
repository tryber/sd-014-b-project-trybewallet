export const USER_EMAIL = 'USER_EMAIL';
export const WALLET_EXPENSES = 'WALLET_EXPENSES';

export const handleEmailUser = (email) => ({
  type: USER_EMAIL,
  email,
});

export const handleWalletExpenses = (object) => ({
  type: WALLET_EXPENSES,
  object,
});
