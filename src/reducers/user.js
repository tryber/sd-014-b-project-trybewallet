// Esse reducer será responsável por tratar as informações da pessoa usuária
import { SEND_USER_INFO } from '../actions/index';

const INITIAL_STATE = {
  user: {
    email: '',
  },
};

function user(state = INITIAL_STATE, action) {
  switch (action.type) {
  case SEND_USER_INFO:
    return ({
      ...state,
      user: action.payload,
    });
  default:
    return state;
  }
}

export default user;
