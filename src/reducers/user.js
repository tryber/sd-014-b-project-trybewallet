// Esse reducer será responsável por tratar as informações da pessoa usuária
import { SET_EMAIL } from '../actions';

const INICIAL_STATE = {
  user: {
    email: '',
  },
  wallet: {
    currencies: [],
    expenses: [],
  },
};

const userReducer = (state = INICIAL_STATE, action) => {
  switch (action.type) {
  case SET_EMAIL:
    return {
      ...state,
      user: { email: action.payload },
    };
  default:
    return state;
  }
};

export default userReducer;
