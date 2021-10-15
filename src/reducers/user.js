// Esse reducer será responsável por tratar as informações da pessoa usuária
import { REQUEST_LOGIN } from '../actions';

const INITIAL_STATE = {
  email: '',
};

const user = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case REQUEST_LOGIN:
    return {
      ...state,
      email: action.email,
    };
  default:
    return state;
  }
};

export default user;
