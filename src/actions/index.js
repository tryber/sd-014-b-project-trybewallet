// Coloque aqui suas actions
export const CHANGE_USER = 'CHANGE_USER';

export const changeUser = (email) => ({
  type: CHANGE_USER,
  email,
});
