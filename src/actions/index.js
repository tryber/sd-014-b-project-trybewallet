export const SAVE_USER = 'SAVE_USER';
export const SAVE_WALLET = 'SAVE_WALLET';
export const GET_EXCHANGE_RATES = 'GET_EXCHANGE_RATES';

export const login = (payload) => ({ type: SAVE_USER, payload });

export const saveWallet = (payload) => ({ type: SAVE_WALLET, payload });
