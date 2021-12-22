// Esse reducer será responsável por tratar as informações da pessoa usuária
import { SAVE_LOGIN_DATA } from '../actions/index';

const initialState = {
  email: '',
};

const user = (state = initialState, action) => {
  switch (action.type) {
  case SAVE_LOGIN_DATA:
    return { ...state, email: action.payload.email };
  default:
    return state;
  }
};

export default user;
