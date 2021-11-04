// Esse reducer será responsável por tratar as informações da pessoa usuária
import { SUBMIT_USER_INFO } from '../actions';

const INITIAL_STATE = {
  email: '',
};

const user = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case SUBMIT_USER_INFO:
    return {
      ...state,
      email: action.payload,
    };
  default:
    return state;
  }
};

export default user;
