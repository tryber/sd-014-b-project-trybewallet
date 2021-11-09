import { STORE_EMAIL } from '../actions';

const INITIAL_STATE = {
  email: '',
};

const user = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case STORE_EMAIL:
    return {
      ...state,
      email: action.value,
    };
  default:
    return state;
  }
};

export default user;
