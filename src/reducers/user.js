// Esse reducer será responsável por tratar as informações da pessoa usuária
const INITIAL_STATE = {
  state: '',
};

function user(state = INITIAL_STATE, action) {
  switch (action.type) {
  case 'NEW_ACTION':
    return { state: action.state };
  default:
    return state;
  }
}

export default user;
