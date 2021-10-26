import { SAVE_USER_DATA } from '../actions';

const INICIAL_STATE = {
  user: {
    email: '',
  },
  wallet: {
    currencies: [],
    expenses: [],
  },
};

function user(state = INICIAL_STATE, action) {
  switch (action.type) {
  case SAVE_USER_DATA:
    return { ...state, email: action.payload };

  default:
    return state;
  }
}

export default user;
