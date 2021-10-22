import { SAVE_LOGIN_INFO } from '../actions';

// Esse reducer será responsável por tratar as informações da pessoa usuária
const INITIAL_STATE = {
  email: '',
};

function user(state = INITIAL_STATE, action) {
  switch (action.type) {
  case SAVE_LOGIN_INFO:
    return {
      ...state,
      email: action.state,
    };
  default:
    return state;
  }
}

export default user;
