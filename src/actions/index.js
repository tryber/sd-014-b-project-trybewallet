// Coloque aqui suas actions

export const SUBMIT_USER = 'SUBMIT_USER';

export const saveEmail = (email) => ({
  type: SUBMIT_USER,
  payload: {
    email,
  },
});
