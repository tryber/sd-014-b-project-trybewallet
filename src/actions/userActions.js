// Coloque aqui suas actions
export const SAVE_USER_EMAIL = 'SAVE_USER_EMAIL';

export const saveUserEmail = (email) => ({
  type: SAVE_USER_EMAIL,
  email,
});
