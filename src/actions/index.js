// Coloque aqui suas actions
export const SAVE_INPUT_EMAIL = 'SAVE_INPUT_EMAIL';

export const saveEmailInState = (payload) => ({
  type: SAVE_INPUT_EMAIL,
  payload,
});
