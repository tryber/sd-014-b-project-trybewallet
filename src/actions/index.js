// Coloque aqui suas actions
const ADD_MAIL = 'ADD_MAIL';

const mailToGlobalState = (mail) => ({
  type: ADD_MAIL,
  mail,
});

export default mailToGlobalState;
