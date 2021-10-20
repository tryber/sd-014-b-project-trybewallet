// Esse reducer será responsável por tratar as informações da pessoa usuária
const INITIAL_STATE = {
  email: '',
};
const user = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case 'SUBMIT':
    return { email: action.state };
  default:
    return state;
  }
};

export default user;
