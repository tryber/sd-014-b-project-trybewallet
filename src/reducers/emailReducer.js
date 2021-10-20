import { SUBMIT_EMAIL } from '../actions/submitEmail';

const INITIAL_STATE = {
  email: '',
};

function user(state = INITIAL_STATE, action) {
  switch (action.type) {
  case SUBMIT_EMAIL:
    return ({
      ...state,
      email: action.payload,
    });

  default:
    return state;
  }
}
export default user;
