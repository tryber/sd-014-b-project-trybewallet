// Coloque aqui suas actions
export const SAVE_USER_DATA = 'SAVE_USER_DATA';

export const saveUserData = (email, password) => ({
  type: SAVE_USER_DATA,
  email,
  password,
});
