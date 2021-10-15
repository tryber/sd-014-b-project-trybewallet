// Coloque aqui suas actions
export const LOGIN_OK = 'LOGIN_OK';

export const statusUser = (payload) => (
  {
    type: LOGIN_OK,
    payload,
  }
);
