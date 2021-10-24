// Esse reducer será responsável por tratar as informações da pessoa usuária
import VALID_EMAIL from '../actions';

const INITIAL_STATE = {
  user: {
    email: '',
  },
};

const userReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case VALID_EMAIL:
    return {
      email: action.email,
    };
  default:
    return state;
  }
};

export default userReducer;
