// Coloque aqui suas actions
export const SAVE_EMAIL = 'SAVE_EMAIL';

// Action para salvar na store o email.
export const saveEmailAction = (email) => ({
  type: SAVE_EMAIL,
  payload: email,
});

export default saveEmailAction;
