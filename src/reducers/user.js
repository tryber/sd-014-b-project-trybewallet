import { SALVA_EMAIL_LOGIN } from '../actions';

const INITIAL_STATE = {
  email: '',
};

const user = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case SALVA_EMAIL_LOGIN:
    return { ...state, email: action.payload };
  default:
    return state;
  }
};

export default user;
