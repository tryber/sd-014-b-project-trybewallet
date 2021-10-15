// Coloque aqui suas actions
import { ADD_MOUNT } from '../reducers/wallet';
import { SAVE_USER } from '../reducers/user';

export const walletAction = (state) => ({ type: ADD_MOUNT, state });

export const userAction = (state) => ({ type: SAVE_USER, state });
