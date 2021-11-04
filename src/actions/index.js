// Coloque aqui suas actions
export const SUBMIT_USER_INFO = 'SUBMIT_USER_INFO';

const submitUser = (payload) => ({
  type: SUBMIT_USER_INFO,
  payload,
});

export default submitUser;
