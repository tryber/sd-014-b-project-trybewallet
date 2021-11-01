// Esse reducer será responsável por tratar as informações da pessoa usuária
import { SEND_USER_INFO } from '../actions/index';

const INITIAL_STATE = {
  email: '',
};

function user(state = INITIAL_STATE, action) {
  switch (action.type) {
  case SEND_USER_INFO:
    return ({
      ...state,
      email: action.email,
    });
  default:
    return state;
  }
}

export default user;
