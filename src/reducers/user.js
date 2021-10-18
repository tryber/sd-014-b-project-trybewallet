// Esse reducer será responsável por tratar as informações da pessoa usuária
import { SET_USER_VALUE } from '../actions';

const initialState = {
  user: {
    email: '',
    password: '',
  },
};

const user = (state = initialState, action) => {
  switch (action.type) {
  case SET_USER_VALUE:
    return { ...state, user: action.load };
  default:
    return state;
  }
};

export default user;
