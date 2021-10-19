// Coloque aqui suas actions
export const SAVE_EMAIL = 'SAVE_EMAIL';
export const savingEmail = (payload) => ({
  type: SAVE_EMAIL,
  payload,
});

export const SAVE_WALLET = 'SAVE_WALLET';
export const savingWallet = (payload) => ({
  type: SAVE_WALLET,
  payload,
});
