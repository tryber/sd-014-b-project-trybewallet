import { LOGIN } from '../actions';

const INITIAL_STATE = {
  email: '',
  password: '',
};

function formReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
  case LOGIN:
    return {
      ...state,
      email: action.payload.email,
      password: action.payload.password,
    };

  default:
    return state;
  }
}

export default formReducer;
