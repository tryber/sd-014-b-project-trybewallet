// Esse reducer será responsável por tratar as informações da pessoa usuária
import INITIAL_REDUCER from './initialReducer';
import { REQUEST_LOGIN } from '../actions';

const user = (state = INITIAL_REDUCER, action) => {
  switch (action.type) {
  case REQUEST_LOGIN:
    return {
      ...state,
      user: action.email.email,
    };
  default:
    return state;
  }
};

export default user;
