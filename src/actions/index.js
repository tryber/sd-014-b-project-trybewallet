// Coloque aqui suas actions
export const USER = 'USER';
export const WALLET = 'WALLET'

export const sendUser = (user) => ({
  type: USER,
  user,
});

export const sendWallet = (wallet) => ({
  type: WALLET,
  wallet,
});
