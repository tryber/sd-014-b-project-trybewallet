// Esse reducer será responsável por tratar as informações da pessoa usuária
import { CHANGE_USER } from '../actions';

const INITIAL_USER_STATE = {
  email: '',

};

const user = (state = INITIAL_USER_STATE, action) => {
  switch (action.type) {
  case CHANGE_USER:
    return {
      ...state,
      email: action.email,
    };
  default:
    return state;
  }
};

export default user;
