// Esse reducer será responsável por tratar as informações da pessoa usuária
import { SAVE_EMAIL } from '../actions';

const INITIAL_STATE = {
  email: '',
};

const userReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) { // Lembrando que a action se chama saveEmailAction e recebe email
  case (SAVE_EMAIL):
    return ({
      ...state,
      email: action.payload,
    });
  default:
    return state;
  }
};

export default userReducer;