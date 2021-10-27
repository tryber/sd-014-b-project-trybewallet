// Coloque aqui suas actions
export const SUBMIT_USER_INFO = 'SUBMIT_USER_INFO';

export const submitUser = (email) => ({
  type: SUBMIT_USER,
  email,
});
