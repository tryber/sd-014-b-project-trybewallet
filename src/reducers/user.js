import { SET_EMAIL } from '../actions/index';

const INITIAL_STATE = {
  email: '',
};

// Esse reducer será responsável por tratar as informações da pessoa usuária
const userReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case SET_EMAIL:
    return {
      ...state,
      email: action.email,
    };

  default:
    return state;
  }
};

export default userReducer;
