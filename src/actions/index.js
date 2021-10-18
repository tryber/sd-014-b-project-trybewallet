// Coloque aqui suas actions
export const USER_LOGIN = 'USER_LOGIN';

export const saveUserLogin = (payload) => (
  {
    type: USER_LOGIN, payload,
  }
);
