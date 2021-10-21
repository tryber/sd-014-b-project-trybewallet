// Esse reducer será responsável por tratar as informações da pessoa usuária
import { SET_LOGIN_VALUE } from '../actions';

const INITIAL_STATE = {
  user: {
    email: '',
    // password: '',
  },
};

function user(state = INITIAL_STATE, action) {
  switch (action.type) {
  case SET_LOGIN_VALUE:
    return { ...state, email: action.payload.email };
  // case SET_PASSWORD_VALUE:
  //   return { ...state, password: action.payload.password };
  default:
    return state;
  }
}
export default user;
