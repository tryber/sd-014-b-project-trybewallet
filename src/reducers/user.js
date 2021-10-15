// Esse reducer será responsável por tratar as informações da pessoa usuária
import { REQUEST_USER } from '../actions';

const INITIAL_STATE = {
  user: {
    email: '',
  },
};

function user(state = INITIAL_STATE, action) {
  switch (action.type) {
  case REQUEST_USER:
    return state;
  default:
    return state;
  }
}

export default user;
