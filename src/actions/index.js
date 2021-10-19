// Coloque aqui suas actions
export const SET_EMAIL = 'SET_EMAIL';

const userActionCreator = (email) => ({ type: SET_EMAIL, email });

export default userActionCreator;
