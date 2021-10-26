import { REQUEST_USER, SAVE_USER } from '../actions';

const INITIAL_STATE = {
  email: '',
  pass: '',
};

function user(state = INITIAL_STATE, action) {
  switch (action.type) {
  case REQUEST_USER:
    return state;
  case SAVE_USER:
    return {
      email: action.value.email,
      pass: action.value.pass,
    };
  default:
    return state;
  }
}

export default user;
