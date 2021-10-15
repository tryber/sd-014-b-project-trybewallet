// Coloque aqui suas actions
const SAVE_EMAIL = 'SAVE_EMAIL';

// Action para salvar na store o email.
const saveEmailAction = (email) => ({
  type: SAVE_EMAIL,
  payload: email,
});

export default saveEmailAction;
