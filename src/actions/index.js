// Coloque aqui suas actions
export const USER = 'USER';

export const userAction = (email) => ({
  type: USER,
  payload: email,
});
