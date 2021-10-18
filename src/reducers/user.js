// Esse reducer será responsável por tratar as informações da pessoa usuária
import { SET_USERS } from '../actions/index';

const INITIAL_STATE = {
  email: '',
  password: '',
};

const reducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case SET_USERS:
    return { ...state, personalInputs: action.payload };
  default:
    return state;
  }
};

export default reducer;
