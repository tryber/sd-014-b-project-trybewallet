import { REQUEST_USER, SAVE_USER } from '../actions';

const INITIAL_STATE = {
  user: {
    email: '',
    senha: '',
  },
};

function user(state = INITIAL_STATE, action) {
  switch (action.type) {
  case REQUEST_USER:
    return state;
  case SAVE_USER:
    return action.value;
  default:
    return state;
  }
}

export default user;