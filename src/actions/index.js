// Coloque aqui suas actions

export const SAVE_USER = 'SAVE_USER';
export const ADD_MOUNT = 'ADD_MOUNT';

export const walletAction = (state) => ({ type: ADD_MOUNT, state });

export const userAction = (state) => ({ type: SAVE_USER, state });
