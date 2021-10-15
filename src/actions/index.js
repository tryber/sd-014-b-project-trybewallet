// Coloque aqui suas actions
export const SAVE_LOGIN_INFO = 'SAVE_LOGIN_INFO';

export const loginInfoAction = (state) => (
  { type: SAVE_LOGIN_INFO,
    state,
  });
