// Esse reducer será responsável por tratar as informações da pessoa usuária
import { SUBMIT_USER_INFO } from "../actions";

const INITIAL_STATE = {
  user: {
    email: '',
  },
  wallet: {
    currencies: [],
    expenses: []
  }
};

export const userReducer = (state = INITIAL_STATE, action) => {
  switch(action.type) {
    case SUBMIT_USER_INFO:
    return {...state, user: action.email}
    default:
    return state;
  }
}