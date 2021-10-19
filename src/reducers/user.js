import { CHECK_EMAIL } from '../actions';

const INITIAL_STATE = {
  email: '',
};

const userReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case CHECK_EMAIL:
    return {
      email: action.email,
    };
  default:
    return state;
  }
};

export default userReducer;
// Esse reducer será responsável por tratar as informações da pessoa usuária
