// Esse reducer será responsável por tratar as informações da pessoa usuária
import { SUBMIT_FORM } from '../actions';

const INITIAL_STATE = {
  email: '',
};

const userReducer = (state = INITIAL_STATE) => {
  switch (action.type) {
  case SUBMIT_FORM:
    return action.payload;
  default:
    return state;
  }
};

export default userReducer;
