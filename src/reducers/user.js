// Esse reducer será responsável por tratar as informações da pessoa usuária
import { EMAIL_INPUT } from '../actions';

const INITIAL_STATE = {
  email: '',
};

const user = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case EMAIL_INPUT:
    return {
      ...state,
      email: action.payload,
    };
  default:
    return state;
  }
};

export default user;
