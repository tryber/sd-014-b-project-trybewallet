// Esse reducer será responsável por tratar as informações da pessoa usuária
import { SAVE_USER } from '../actions';

const INITIAL_STATE = {
  email: '',
  password: '',
};

function user(state = INITIAL_STATE, action) {
  switch (action.type) {
  case SAVE_USER:
    return {
      email: action.state.email,
      password: action.state.password,
    };
  default:
    return state;
  }
}

export default user;
