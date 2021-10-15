// Esse reducer será responsável por tratar as informações da pessoa usuária
import { SAVE_USER } from '../actions';

const INITIAL_STATE = {
  email: '',
  senha: '',
};

function user(state = INITIAL_STATE, action) {
  switch (action.type) {
  case SAVE_USER:
    return {
      email: action.value.email,
      senha: action.value.senha,
    };
  default:
    return state;
  }
}

export default user;
