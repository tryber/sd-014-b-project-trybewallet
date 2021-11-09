import { SAVE_EMAIL } from '../actions';

const initialState = {
  email: '',
};

function user(state = initialState, action) {
  switch (action.type) {
  case SAVE_EMAIL:
    return {
      email: action.payload,
    };
  default:
    return state;
  }
}

export default user;
